import React from 'react';
import { User, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface RoleSelectionProps {
  onRoleSelect: (role: 'customer' | 'provider') => void;
}

export default function RoleSelection({ onRoleSelect }: RoleSelectionProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="mb-8 text-center">
        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-4 mx-auto ios-shadow-lg">
          <span className="text-2xl font-bold text-white">S</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Willkommen bei Servify</h1>
        <p className="text-muted-foreground text-lg">Finden statt suchen – Servify verbindet</p>
      </div>

      {/* Role Selection Cards */}
      <div className="w-full max-w-md space-y-4">
        <Card 
          className="ios-card p-6 cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          onClick={() => onRoleSelect('customer')}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground">Ich suche Services</h3>
              <p className="text-muted-foreground text-sm">Finde und buche Dienstleistungen in deiner Nähe</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </Card>

        <Card 
          className="ios-card p-6 cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          onClick={() => onRoleSelect('provider')}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground">Ich biete Services an</h3>
              <p className="text-muted-foreground text-sm">Erstelle dein Profil und verdiene Geld mit deinen Fähigkeiten</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </Card>
      </div>

      {/* Benefits */}
      <div className="mt-12 w-full max-w-md">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-xs text-muted-foreground">Anbieter</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">2.5k+</div>
            <div className="text-xs text-muted-foreground">Services</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">4.8★</div>
            <div className="text-xs text-muted-foreground">Bewertung</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-xs text-muted-foreground">
          Mit der Nutzung stimmst du unseren{' '}
          <span className="text-primary">Nutzungsbedingungen</span> und der{' '}
          <span className="text-primary">Datenschutzerklärung</span> zu.
        </p>
      </div>
    </div>
  );
}