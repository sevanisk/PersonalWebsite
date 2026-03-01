import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// The *entry point* for this application.
// Where the React app is bootstrapped into the DOM.
// Grabs the #root element, creates the React root with createRoot,
// and renders whatever I choose.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
