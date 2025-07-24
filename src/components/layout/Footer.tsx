import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-primary">Servify</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Finden statt suchen – Servify verbindet Dienstleistungsanbieter mit Kunden in der ganzen Schweiz.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Haushalt</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nachhilfe</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Garten</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Handwerk</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Unternehmen</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Presse</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partner</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Kontakt</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@servify.ch</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+41 44 123 45 67</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Zürich, Schweiz</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Servify. Alle Rechte vorbehalten.
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-primary transition-colors">AGB</a>
            <a href="#" className="hover:text-primary transition-colors">Impressum</a>
            <a href="#" className="hover:text-primary transition-colors">Hilfe</a>
          </div>
        </div>
      </div>
    </footer>
  )
}