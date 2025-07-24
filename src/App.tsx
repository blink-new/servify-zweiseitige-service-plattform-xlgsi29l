import React, { useState, useEffect } from 'react';
import { createClient } from './blink/client';
import RoleSelection from './components/onboarding/RoleSelection';
import AuthScreen from './components/auth/AuthScreen';
import CustomerHome from './components/customer/CustomerHome';
import ProviderHome from './components/provider/ProviderHome';
import { User } from './types';

// Initialize Blink client
const blink = createClient({
  projectId: 'servify-zweiseitige-service-plattform-xlgsi29l',
  authRequired: false // We'll handle auth manually for role-based flow
});

type AppState = 'role-selection' | 'auth' | 'customer-home' | 'provider-home';

function App() {
  const [appState, setAppState] = useState<AppState>('role-selection');
  const [selectedRole, setSelectedRole] = useState<'customer' | 'provider' | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = async () => {
      try {
        // In a real app, check Blink auth state
        const savedUser = localStorage.getItem('servify-user');
        if (savedUser) {
          const userData = JSON.parse(savedUser);
          setUser(userData);
          setSelectedRole(userData.role);
          setAppState(userData.role === 'customer' ? 'customer-home' : 'provider-home');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleRoleSelect = (role: 'customer' | 'provider') => {
    setSelectedRole(role);
    setAppState('auth');
  };

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    // Save user data locally (in real app, this would be handled by Blink SDK)
    localStorage.setItem('servify-user', JSON.stringify(userData));
    setAppState(userData.role === 'customer' ? 'customer-home' : 'provider-home');
  };

  const handleBackToRoleSelection = () => {
    setSelectedRole(null);
    setAppState('role-selection');
  };

  const handleServiceSelect = (service: any) => {
    console.log('Service selected:', service);
    // Navigate to service detail page
  };

  const handleCreateService = () => {
    console.log('Create service clicked');
    // Navigate to service creation page
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedRole(null);
    localStorage.removeItem('servify-user');
    setAppState('role-selection');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 mx-auto ios-shadow-lg animate-pulse">
            <span className="text-2xl font-bold text-white">S</span>
          </div>
          <p className="text-muted-foreground">Servify wird geladen...</p>
        </div>
      </div>
    );
  }

  switch (appState) {
    case 'role-selection':
      return <RoleSelection onRoleSelect={handleRoleSelect} />;
    
    case 'auth':
      return (
        <AuthScreen
          role={selectedRole!}
          onBack={handleBackToRoleSelection}
          onAuthSuccess={handleAuthSuccess}
        />
      );
    
    case 'customer-home':
      return (
        <CustomerHome
          user={user!}
          onServiceSelect={handleServiceSelect}
        />
      );
    
    case 'provider-home':
      return (
        <ProviderHome
          user={user!}
          onCreateService={handleCreateService}
        />
      );
    
    default:
      return <RoleSelection onRoleSelect={handleRoleSelect} />;
  }
}

export default App;