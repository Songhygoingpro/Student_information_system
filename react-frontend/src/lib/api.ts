import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
});

// Function to get CSRF token from cookies
const getCsrfToken = () => {
  const cookies = document.cookie.split(';');
  const csrfCookie = cookies.find(cookie => cookie.trim().startsWith('XSRF-TOKEN='));
  if (csrfCookie) {
    return decodeURIComponent(csrfCookie.split('=')[1]);
  }
  return null;
};

// Add request interceptor to automatically include CSRF token
api.interceptors.request.use(async (config) => {
  // For non-GET requests, ensure CSRF token is available
  if (config.method !== 'get') {
    // Get CSRF cookie if not already present
    if (!getCsrfToken()) {
      await api.get('/sanctum/csrf-cookie');
    }
    
    // Add CSRF token to headers
    const token = getCsrfToken();
    if (token) {
      config.headers['X-XSRF-TOKEN'] = token;
    }
  }
  return config;
});

export default api;
