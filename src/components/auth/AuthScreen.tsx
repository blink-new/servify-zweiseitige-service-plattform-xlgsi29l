import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff, Apple } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';

interface AuthScreenProps {
  role: 'customer' | 'provider';
  onBack: () => void;
  onAuthSuccess: (user: any) => void;
}

export default function AuthScreen({ role, onBack, onAuthSuccess }: AuthScreenProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const roleTitle = role === 'customer' ? 'Kunde' : 'Anbieter';
  const roleDescription = role === 'customer' 
    ? 'Finde und buche Services in deiner Nähe' 
    : 'Biete deine Services an und verdiene Geld';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in real app, use Blink SDK
    const mockUser = {
      id: '1',
      email: formData.email,
      name: formData.name || formData.email.split('@')[0],
      role,
      isVerified: false,
      subscriptionTier: 'basic'
    };
    onAuthSuccess(mockUser);
  };

  const handleSocialAuth = (provider: string) => {
    // Mock social auth - in real app, use Blink SDK
    const mockUser = {
      id: '1',
      email: `user@${provider}.com`,
      name: `${provider} User`,
      role,
      isVerified: true,
      subscriptionTier: 'basic'
    };
    onAuthSuccess(mockUser);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <div className="ios-nav-bar px-4 py-3">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="p-2 -ml-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1 text-center">
            <h1 className="text-lg font-semibold">{roleTitle} {isLogin ? 'Anmelden' : 'Registrieren'}</h1>
          </div>
          <div className="w-9" /> {/* Spacer for centering */}
        </div>
      </div>

      <div className="px-6 py-8">
        {/* Role Info */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
            <span className="text-xl font-bold text-white">
              {role === 'customer' ? '👤' : '💼'}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">{roleTitle}-Konto</h2>
          <p className="text-muted-foreground">{roleDescription}</p>
        </div>

        {/* Social Login */}
        <div className="space-y-3 mb-6">
          <Button
            onClick={() => handleSocialAuth('google')}
            variant="outline"
            className="w-full ios-button-secondary h-12 text-base"
          >
            <div className="w-5 h-5 mr-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            Mit Google fortfahren
          </Button>
          
          <Button
            onClick={() => handleSocialAuth('apple')}
            variant="outline"
            className="w-full ios-button-secondary h-12 text-base"
          >
            <Apple className="w-5 h-5 mr-3" />
            Mit Apple fortfahren
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-border"></div>
          <span className="px-4 text-sm text-muted-foreground">oder</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Email/Password Form */}
        <Card className="ios-card p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Dein vollständiger Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="ios-input h-12"
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                E-Mail
              </label>
              <Input
                type="email"
                placeholder="deine@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="ios-input h-12"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Passwort
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Mindestens 8 Zeichen"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="ios-input h-12 pr-12"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Passwort bestätigen
                </label>
                <Input
                  type="password"
                  placeholder="Passwort wiederholen"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="ios-input h-12"
                  required={!isLogin}
                />
              </div>
            )}

            <Button
              type="submit"
              className="w-full ios-button h-12 text-base font-semibold mt-6"
            >
              {isLogin ? 'Anmelden' : 'Konto erstellen'}
            </Button>
          </form>
        </Card>

        {/* Switch Mode */}
        <div className="text-center mt-6">
          <p className="text-muted-foreground">
            {isLogin ? 'Noch kein Konto?' : 'Bereits registriert?'}{' '}
            <Button
              variant="ghost"
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-semibold p-0 h-auto"
            >
              {isLogin ? 'Registrieren' : 'Anmelden'}
            </Button>
          </p>
        </div>

        {/* Forgot Password */}
        {isLogin && (
          <div className="text-center mt-4">
            <Button
              variant="ghost"
              className="text-primary font-semibold p-0 h-auto"
            >
              Passwort vergessen?
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}