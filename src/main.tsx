import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import CaseStudy from './pages/oca-blast'
import DesignSystem from './pages/oca-design-system'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/oca-blast" element={<CaseStudy />} />
        <Route path="/oca-design-system" element={<DesignSystem />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
