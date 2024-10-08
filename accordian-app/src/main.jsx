import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AccordianSingle from './AccordianSingle'
import './index.css'
import AccordianMultiple from './AccordianMultiple'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AccordianSingle />
    <AccordianMultiple />
  </StrictMode>,
)
