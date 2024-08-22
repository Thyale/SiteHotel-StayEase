import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import Top from './BodyOfProject/Top'
import Center from './BodyOfProject/Center'
import Destaques from './BodyOfProject/Destaques'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Top/>
    <Center/>
    <Destaques/>
  </StrictMode>,
)
