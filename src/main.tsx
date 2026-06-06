import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './i18n/LanguageContext'
import { FavoritesProvider } from './context/FavoritesContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <FavoritesProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </FavoritesProvider>
    </LanguageProvider>
  </StrictMode>,
)
