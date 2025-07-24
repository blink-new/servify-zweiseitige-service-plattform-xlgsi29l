import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Search, Star, MapPin, Clock, Shield, Zap, Users, TrendingUp } from 'lucide-react'
import { SERVICE_CATEGORIES } from '@/types'

interface LandingPageProps {
  onSearch: (query: string, category?: string) => void
}

export function LandingPage({ onSearch }: LandingPageProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handleCategoryClick = (category: string) => {
    onSearch('', category)
  }

  // Mock featured services
  const featuredServices = [
    {
      id: '1',
      title: 'Mathematik Nachhilfe',
      provider: 'Max Müller',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 4.9,
      reviewCount: 127,
      price: 45,
      priceType: 'hourly' as const,
      location: 'Zürich',
      category: 'Nachhilfe',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop'
    },
    {
      id: '2',
      title: 'Hausreinigung & Putzhilfe',
      provider: 'Lena Schmidt',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 4.8,
      reviewCount: 89,
      price: 35,
      priceType: 'hourly' as const,
      location: 'Basel',
      category: 'Haushalt',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop'
    },
    {
      id: '3',
      title: 'Webdesign & Branding',
      provider: 'Anna Weber',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5.0,
      reviewCount: 45,
      price: 850,
      priceType: 'fixed' as const,
      location: 'Bern',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Finden statt suchen –
                <span className="text-primary block">Servify verbindet</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Die moderne Plattform für Dienstleistungen in der Schweiz. 
                Finde lokale Experten oder biete deine Services an.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <div className="flex rounded-xl border bg-background shadow-lg">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Was suchst du? (z.B. Nachhilfe, Putzhilfe, Design...)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 text-lg rounded-l-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <Button type="submit" size="lg" className="rounded-r-xl px-8">
                    Suchen
                  </Button>
                </div>
              </form>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Anbieter</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2.5k+</div>
                <div className="text-sm text-muted-foreground">Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-muted-foreground">Bewertung</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Beliebte Kategorien</h2>
            <p className="text-muted-foreground">Entdecke Services in verschiedenen Bereichen</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {SERVICE_CATEGORIES.slice(0, 10).map((category) => (
              <Card 
                key={category} 
                className="cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-105"
                onClick={() => handleCategoryClick(category)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-semibold">
                      {category.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-medium">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Empfohlene Services</h2>
            <p className="text-muted-foreground">Top bewertete Anbieter in deiner Nähe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3">
                    {service.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{service.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={service.avatar} alt={service.provider} />
                        <AvatarFallback>{service.provider.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{service.provider}</div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{service.rating}</span>
                          <span className="text-sm text-muted-foreground">({service.reviewCount})</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold">
                        CHF {service.price}
                        <span className="text-sm font-normal text-muted-foreground">
                          {service.priceType === 'hourly' ? '/Std.' : ''}
                        </span>
                      </div>
                      <Button size="sm">Buchen</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Warum Servify?</h2>
            <p className="text-muted-foreground">Die Vorteile unserer Plattform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Sicher & Verifiziert</h3>
                <p className="text-sm text-muted-foreground">
                  Alle Anbieter werden überprüft und verifiziert
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Schnell & Einfach</h3>
                <p className="text-sm text-muted-foreground">
                  Buche Services in wenigen Klicks
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Lokale Experten</h3>
                <p className="text-sm text-muted-foreground">
                  Finde qualifizierte Anbieter in deiner Nähe
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Faire Preise</h3>
                <p className="text-sm text-muted-foreground">
                  Transparente Preisgestaltung ohne versteckte Kosten
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center text-white">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Bereit durchzustarten?
              </h2>
              <p className="text-lg opacity-90">
                Werde Teil der Servify Community und starte noch heute als Anbieter oder Kunde.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-primary">
                  Als Anbieter starten
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Service finden
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}