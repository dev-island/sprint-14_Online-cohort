import React from 'react'
import ReactDOM from 'react-dom/client.js'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './context/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
