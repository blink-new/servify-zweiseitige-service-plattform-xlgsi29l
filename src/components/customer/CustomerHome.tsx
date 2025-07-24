import React, { useState } from 'react';
import { Search, MapPin, Star, Heart, Filter, Bell, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

interface CustomerHomeProps {
  user: any;
  onServiceSelect: (service: any) => void;
}

const categories = [
  { id: 'household', name: 'Haushalt', icon: '🏠', color: 'bg-blue-100 text-blue-600' },
  { id: 'tutoring', name: 'Nachhilfe', icon: '📚', color: 'bg-green-100 text-green-600' },
  { id: 'design', name: 'Design', icon: '🎨', color: 'bg-purple-100 text-purple-600' },
  { id: 'garden', name: 'Garten', icon: '🌱', color: 'bg-emerald-100 text-emerald-600' },
  { id: 'repair', name: 'Reparatur', icon: '🔧', color: 'bg-orange-100 text-orange-600' },
  { id: 'beauty', name: 'Beauty', icon: '💄', color: 'bg-pink-100 text-pink-600' },
];

const featuredServices = [
  {
    id: 1,
    title: 'Mathematik Nachhilfe',
    provider: 'Max Müller',
    rating: 4.9,
    reviews: 127,
    price: 35,
    priceType: 'Stunde',
    location: 'Zürich',
    distance: '1.2 km',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    category: 'Nachhilfe',
    isVerified: true,
    isPremium: true,
    isBoosted: false,
    instantBooking: true,
    tags: ['Gymnasium', 'Matura', 'Online möglich']
  },
  {
    id: 2,
    title: 'Wohnung Reinigung',
    provider: 'Lena Schmidt',
    rating: 4.8,
    reviews: 89,
    price: 25,
    priceType: 'Stunde',
    location: 'Basel',
    distance: '0.8 km',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    category: 'Haushalt',
    isVerified: true,
    isPremium: false,
    isBoosted: true,
    instantBooking: false,
    tags: ['Ökologisch', 'Eigene Materialien', 'Flexibel']
  },
  {
    id: 3,
    title: 'Logo & Branding Design',
    provider: 'Anna Weber',
    rating: 5.0,
    reviews: 45,
    price: 150,
    priceType: 'Projekt',
    location: 'Bern',
    distance: '2.1 km',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    category: 'Design',
    isVerified: true,
    isPremium: true,
    isBoosted: true,
    instantBooking: true,
    tags: ['Corporate Design', 'Schnelle Lieferung', 'Revisions inklusive']
  }
];

export default function CustomerHome({ user, onServiceSelect }: CustomerHomeProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (serviceId: number) => {
    setFavorites(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
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
              <p className="text-xs text-muted-foreground">Hallo,</p>
              <p className="text-sm font-semibold text-foreground">{user.name}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="px-4 pb-20">
        {/* Search Bar */}
        <div className="py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Services, Anbieter oder Kategorie suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ios-input pl-10 pr-12 h-12"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
            >
              <Filter className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2 mb-6">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground">Zürich, Schweiz</span>
          <Button variant="ghost" size="sm" className="text-primary text-sm p-0 h-auto">
            Ändern
          </Button>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">Kategorien</h2>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category) => (
              <Card
                key={category.id}
                className={`ios-card p-4 cursor-pointer transition-all duration-200 active:scale-95 ${
                  selectedCategory === category.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <p className="text-xs font-medium text-foreground">{category.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-foreground">Empfohlene Services</h2>
            <Button variant="ghost" className="text-primary text-sm p-0 h-auto">
              Alle anzeigen
            </Button>
          </div>
          
          <div className="space-y-4">
            {featuredServices.map((service) => (
              <Card
                key={service.id}
                className="ios-card p-4 cursor-pointer transition-all duration-200 active:scale-[0.98]"
                onClick={() => onServiceSelect(service)}
              >
                <div className="flex space-x-3">
                  {/* Provider Image */}
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.provider}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    {service.isVerified && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>

                  {/* Service Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-foreground text-sm truncate">
                        {service.title}
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-1 -mr-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(service.id);
                        }}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            favorites.includes(service.id)
                              ? 'fill-red-500 text-red-500'
                              : 'text-muted-foreground'
                          }`}
                        />
                      </Button>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-2">{service.provider}</p>
                    
                    {/* Badges */}
                    <div className="flex items-center space-x-1 mb-2">
                      {service.isPremium && (
                        <Badge className="bg-accent text-accent-foreground text-xs px-2 py-0.5">
                          Premium
                        </Badge>
                      )}
                      {service.isBoosted && (
                        <Badge className="bg-orange-100 text-orange-600 text-xs px-2 py-0.5">
                          Boost
                        </Badge>
                      )}
                      {service.instantBooking && (
                        <Badge className="bg-green-100 text-green-600 text-xs px-2 py-0.5">
                          Sofort buchbar
                        </Badge>
                      )}
                    </div>

                    {/* Rating & Location */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{service.rating}</span>
                          <span className="text-muted-foreground">({service.reviews})</span>
                        </div>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{service.distance}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-foreground">CHF {service.price}</span>
                        <span className="text-muted-foreground">/{service.priceType}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">Schnellzugriff</h2>
          <div className="grid grid-cols-2 gap-3">
            <Card className="ios-card p-4 cursor-pointer transition-all duration-200 active:scale-95">
              <div className="text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary">📅</span>
                </div>
                <p className="text-sm font-medium text-foreground">Meine Buchungen</p>
              </div>
            </Card>
            <Card className="ios-card p-4 cursor-pointer transition-all duration-200 active:scale-95">
              <div className="text-center">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-accent">💬</span>
                </div>
                <p className="text-sm font-medium text-foreground">Nachrichten</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="ios-tab-bar px-4 py-2">
        <div className="flex items-center justify-around">
          <Button variant="ghost" className="flex flex-col items-center space-y-1 p-2">
            <Search className="w-5 h-5 text-primary" />
            <span className="text-xs text-primary font-medium">Suchen</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center space-y-1 p-2">
            <Heart className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Favoriten</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center space-y-1 p-2">
            <span className="w-5 h-5 text-muted-foreground">📅</span>
            <span className="text-xs text-muted-foreground">Buchungen</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center space-y-1 p-2">
            <User className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Profil</span>
          </Button>
        </div>
      </div>
    </div>
  );
}