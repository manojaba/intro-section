import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './Components/Hero.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
  </StrictMode>,
)
