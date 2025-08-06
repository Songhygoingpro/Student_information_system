import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ProtectedLayout from './components/layouts/ProtectedLayout';
import Home from '@/pages/Home';
import Program from '@/pages/program/index';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import ProfilePage from '@/pages/profile';
import ClassesList from '@/pages/classes';
import ResultBoard from '@/pages/classes/board';
import { useUser } from '@/contexts/UserContext';

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useUser();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

function AdminPage() {
  return (
    <div className="space-y-2">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <p className="text-sm text-muted-foreground">Only visible to users with role = admin.</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Backward compatibility for older paths */}
      <Route path="/auth/login" element={<Navigate to="/login" replace />} />
      <Route path="/auth/register" element={<Navigate to="/register" replace />} />
      <Route index element={<Home />} />
      <Route
        path="program"
        element={
          <RequireAuth>
            <Program />
          </RequireAuth>
        }
      />
      <Route
        path="classes"
        element={
          <RequireAuth>
            <ClassesList />
          </RequireAuth>
        }
      />
      <Route
        path="classes/:id/board"
        element={
          <RequireAuth>
            <ResultBoard />
          </RequireAuth>
        }
      />
      {/* Default layout at root (/) */}
      <Route path="/" element={<ProtectedLayout />}>
        {/* Public homepage content can render even if not authenticated.
            If you want to force auth for homepage, wrap Home with <RequireAuth>. */}


        {/* Protected routes (require auth) */}

        <Route
          path="admin"
          element={
            <RequireAuth>
              <AdminPage />
            </RequireAuth>
          }
        />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
