import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import AppRouter from './routing/routing'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
