import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface HomeProps {
  onLogout: (authenticated: boolean) => void;
}

function Home({ onLogout }: HomeProps): React.JSX.Element {
  const navigate = useNavigate();

  const handleLogout = (): void => {
    localStorage.removeItem('isAuthenticated');
    onLogout(false);
    navigate('/signin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Home</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Home</h1>
              <p className="text-gray-600">Welcome to your home page!</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="w-full">
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;
