import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<AppProvider>
  <App />
  </AppProvider>
</BrowserRouter>
)
