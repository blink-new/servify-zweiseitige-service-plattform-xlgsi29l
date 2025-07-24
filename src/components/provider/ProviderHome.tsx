import React, { useState } from 'react';
import { Plus, TrendingUp, Calendar, MessageCircle, Settings, Star, Crown, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

interface ProviderHomeProps {
  user: any;
  onCreateService: () => void;
}

const mockStats = {
  totalEarnings: 2450,
  thisMonth: 680,
  totalBookings: 47,
  activeServices: 3,
  rating: 4.8,
  reviews: 89,
  profileViews: 234,
  responseRate: 95
};

const recentBookings = [
  {
    id: 1,
    customer: 'Sarah M.',
    service: 'Mathematik Nachhilfe',
    date: '2024-01-25',
    time: '14:00',
    status: 'confirmed',
    amount: 35,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: 2,
    customer: 'Michael K.',
    service: 'Physik Nachhilfe',
    date: '2024-01-26',
    time: '16:30',
    status: 'pending',
    amount: 40,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: 3,
    customer: 'Lisa W.',
    service: 'Mathematik Nachhilfe',
    date: '2024-01-27',
    time: '10:00',
    status: 'completed',
    amount: 35,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
  }
];

export default function ProviderHome({ user, onCreateService }: ProviderHomeProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const isBasicUser = user.subscriptionTier === 'basic';

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-600';
      case 'pending': return 'bg-yellow-100 text-yellow-600';
      case 'completed': return 'bg-blue-100 text-blue-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Bestätigt';
      case 'pending': return 'Ausstehend';
      case 'completed': return 'Abgeschlossen';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <div className="ios-nav-bar px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-white">
                {user.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <p className="text-sm font-semibold text-foreground">{user.name}</p>
                {user.isVerified && (
                  <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
                {!isBasicUser && (
                  <Crown className="w-4 h-4 text-accent" />
                )}
              </div>
              <div className="flex items-center space-x-1">
                <Badge className={`text-xs px-2 py-0.5 ${isBasicUser ? 'bg-gray-100 text-gray-600' : 'bg-accent/10 text-accent'}`}>
                  {isBasicUser ? 'Basic' : 'Premium'}
                </Badge>
                {!isBasicUser && (
                  <Badge className="bg-orange-100 text-orange-600 text-xs px-2 py-0.5">
                    Boost aktiv
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="p-2">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="px-4 pb-20">
        {/* Premium Upgrade Banner (for Basic users) */}
        {isBasicUser && (
          <Card className="ios-card p-4 mb-6 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <Crown className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-foreground">Premium werden</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  0% Kommission • Mehr Sichtbarkeit • 8 Bilder
                </p>
                <Button size="sm" className="ios-button text-xs px-4 py-2 h-8">
                  5 Tage kostenlos testen
                </Button>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-accent">CHF 19</p>
                <p className="text-xs text-muted-foreground">/Monat</p>
              </div>
            </div>
          </Card>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card className="ios-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Diesen Monat</p>
                <p className="text-xl font-bold text-foreground">CHF {mockStats.thisMonth}</p>
                <p className="text-xs text-green-600">+12% vs. letzter Monat</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="ios-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Bewertung</p>
                <div className="flex items-center space-x-1">
                  <p className="text-xl font-bold text-foreground">{mockStats.rating}</p>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-xs text-muted-foreground">{mockStats.reviews} Bewertungen</p>
              </div>
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Performance Overview */}
        <Card className="ios-card p-4 mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Performance</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground">Profil-Aufrufe</span>
                <span className="text-sm font-semibold text-foreground">{mockStats.profileViews}</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground">Antwortrate</span>
                <span className="text-sm font-semibold text-foreground">{mockStats.responseRate}%</span>
              </div>
              <Progress value={mockStats.responseRate} className="h-2" />
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center">
                <p className="text-lg font-bold text-foreground">{mockStats.totalBookings}</p>
                <p className="text-xs text-muted-foreground">Buchungen</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-foreground">{mockStats.activeServices}</p>
                <p className="text-xs text-muted-foreground">Services</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-foreground">CHF {mockStats.totalEarnings}</p>
                <p className="text-xs text-muted-foreground">Gesamt</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button
            onClick={onCreateService}
            className="ios-button h-14 flex flex-col items-center justify-center space-y-1"
          >
            <Plus className="w-5 h-5" />
            <span className="text-xs">Service erstellen</span>
          </Button>
          
          <Button
            variant="outline"
            className="ios-button-secondary h-14 flex flex-col items-center justify-center space-y-1"
          >
            <Zap className="w-5 h-5" />
            <span className="text-xs">Boost kaufen</span>
          </Button>
        </div>

        {/* Recent Bookings */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-foreground">Aktuelle Buchungen</h3>
            <Button variant="ghost" className="text-primary text-sm p-0 h-auto">
              Alle anzeigen
            </Button>
          </div>
          
          <div className="space-y-3">
            {recentBookings.map((booking) => (
              <Card key={booking.id} className="ios-card p-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={booking.avatar}
                    alt={booking.customer}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {booking.customer}
                      </p>
                      <Badge className={`text-xs px-2 py-0.5 ${getStatusColor(booking.status)}`}>
                        {getStatusText(booking.status)}
                      </Badge>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-1">{booking.service}</p>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        {booking.date} • {booking.time}
                      </span>
                      <span className="font-semibold text-foreground">
                        CHF {booking.amount}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Commission Info (for Basic users) */}
        {isBasicUser && (
          <Card className="ios-card p-4 mb-6 border-orange-200 bg-orange-50/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-orange-600">💰</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">Kommission</p>
                <p className="text-xs text-muted-foreground">
                  15% werden bei Auszahlung abgezogen • Premium: 0%
                </p>
              </div>
              <Button size="sm" variant="outline" className="text-xs">
                Upgrade
              </Button>
            </div>
          </Card>
        )}
      </div>

      {/* Tab Bar */}
      <div className="ios-tab-bar px-4 py-2">
        <div className="flex items-center justify-around">
          <Button variant="ghost" className="flex flex-col items-center space-y-1 p-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-xs text-primary font-medium">Dashboard</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center space-y-1 p-2">
            <Calendar className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Kalender</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center space-y-1 p-2">
            <MessageCircle className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Chats</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center space-y-1 p-2">
            <Settings className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Einstellungen</span>
          </Button>
        </div>
      </div>
    </div>
  );
}