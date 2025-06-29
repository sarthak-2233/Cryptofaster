import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Crytocontext from './Crytocontext.jsx'
import 'react-alice-carousel/lib/alice-carousel.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Crytocontext>
    <App />
    </Crytocontext>
  </StrictMode>,
)
