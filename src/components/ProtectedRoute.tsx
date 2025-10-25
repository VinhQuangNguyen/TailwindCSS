import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps): React.JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  useEffect(() => {
    // Check authentication status when component mounts or when localStorage changes
    const checkAuth = (): void => {
      setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
    };

    // Initial check
    checkAuth();

    // Listen for storage changes (when user logs out in another tab)
    const handleStorageChange = (e: StorageEvent): void => {
      if (e.key === 'isAuthenticated') {
        checkAuth();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
