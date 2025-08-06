import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';
import api from '../lib/api';

// User interface
export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at?: string;
  role?: 'admin' | 'user' | string; // added role for RBAC
}

// Auth state interface
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Action types
type AuthAction =
  | { type: 'AUTH_START' }
  | { type: 'AUTH_SUCCESS'; payload: User }
  | { type: 'AUTH_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'CLEAR_ERROR' }
  | { type: 'UPDATE_USER'; payload: User };

// Initial state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Auth reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'AUTH_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'AUTH_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

// Context interface
interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, password_confirmation: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<User> & { current_password?: string; new_password?: string }) => Promise<void>;
  clearError: () => void;
  checkAuth: () => Promise<void>;
}

// Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check authentication status on mount
  useEffect(() => {
    checkAuth();
  }, []);

  // Check if user is authenticated
  const checkAuth = async () => {
    try {
      dispatch({ type: 'AUTH_START' });
      const response = await api.get('/api/me');
      
      if (response.data.status === 'success') {
        const user = response.data.data;
        // Ensure role exists on client side (fallback to 'user')
        const normalized = { ...user, role: user.role ?? 'user' };
        dispatch({ type: 'AUTH_SUCCESS', payload: normalized });
      } else {
        dispatch({ type: 'AUTH_FAILURE', payload: 'Authentication failed' });
      }
    } catch (error: any) {
      dispatch({ type: 'AUTH_FAILURE', payload: 'Not authenticated' });
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    try {
      dispatch({ type: 'AUTH_START' });
      
      const response = await api.post('/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // After successful login, fetch user data
        await checkAuth();
      } else {
        dispatch({ type: 'AUTH_FAILURE', payload: 'Login failed' });
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Login failed';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage });
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string, password_confirmation: string) => {
    try {
      dispatch({ type: 'AUTH_START' });
      
      const response = await api.post('/api/register', {
        name,
        email,
        password,
        password_confirmation,
      });

      if (response.data.status === 'success') {
        // After successful registration, automatically log in
        const loginResponse = await api.post('/api/login', {
          email,
          password,
        });

        if (loginResponse.status === 200) {
          // After successful login, fetch user data
          await checkAuth();
        } else {
          dispatch({ type: 'AUTH_FAILURE', payload: 'Auto-login failed after registration' });
        }
      } else {
        dispatch({ type: 'AUTH_FAILURE', payload: 'Registration failed' });
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Registration failed';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage });
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await api.post('/api/logout');
      dispatch({ type: 'LOGOUT' });
    } catch (error: any) {
      console.error('Logout error:', error);
      // Even if logout fails on server, clear local state
      dispatch({ type: 'LOGOUT' });
    }
  };

  // Update profile function
  const updateProfile = async (data: Partial<User> & { current_password?: string; new_password?: string }) => {
    try {
      const response = await api.put('/api/profile', data);
      
      if (response.data.status === 'success') {
        dispatch({ type: 'UPDATE_USER', payload: response.data.data });
      } else {
        throw new Error(response.data.message || 'Profile update failed');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Profile update failed';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage });
    }
  };

  // Clear error function
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const value: UserContextType = {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    error: state.error,
    login,
    register,
    logout,
    updateProfile,
    clearError,
    checkAuth,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use UserContext
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext;
