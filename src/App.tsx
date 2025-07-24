import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LandingPage } from '@/pages/LandingPage'
import { Toaster } from '@/components/ui/toaster'
import { blink } from '@/blink/client'
import type { User } from '@/types'

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user as User | null)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  const handleSearch = (query: string, category?: string) => {
    console.log('Search:', query, category)
    // TODO: Implement search functionality
  }

  const handleToggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <div className="text-lg font-medium">Servify wird geladen...</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-background ${isDark ? 'dark' : ''}`}>
      <Header 
        user={user} 
        onSearch={handleSearch}
        onToggleTheme={handleToggleTheme}
        isDark={isDark}
      />
      
      <main>
        <LandingPage onSearch={handleSearch} />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  )
}

export default App