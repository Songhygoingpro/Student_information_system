import { useState } from 'react';
import api from '@/lib/api';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post('/api/register', {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });
      
      alert(res.data.message || 'Registration successful');

      // Now log in
      await api.post('/api/login', { email, password });
      const userRes = await api.get('/api/me');
      console.log('Authenticated user:', userRes.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={register} className="space-y-4 p-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        className="border p-2 w-full"
        required
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}
