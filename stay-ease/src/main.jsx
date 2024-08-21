import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Top from './Top'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Top/>
  </StrictMode>,
)
