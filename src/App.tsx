import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.tsx';
import Home from './pages/Home.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

function App(): React.JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  // Function to update authentication state (passed to child components)
  const updateAuthState = (authenticated: boolean): void => {
    setIsAuthenticated(authenticated);
  };

  return (
    <Routes>
      <Route
        path="/signin"
        element={
          isAuthenticated ? <Navigate to="/" replace /> : <Login onAuthSuccess={updateAuthState} />
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home onLogout={updateAuthState} />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/signin" replace />} />
    </Routes>
  );
}

export default App;