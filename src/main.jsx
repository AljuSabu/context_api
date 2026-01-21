import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthenticationContextProvider } from './context/AuthenticationContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthenticationContextProvider>
    <App />
  </AuthenticationContextProvider>,
)
