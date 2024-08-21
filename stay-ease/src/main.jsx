import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Top from './Top'
import Center from './Center'
import Destaques from './Destaques'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Top/>
    <Center/>
    <Destaques/>
  </StrictMode>,
)
