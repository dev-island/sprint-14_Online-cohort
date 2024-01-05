import { useContext, useState } from 'react'
import './App.css'
import { ThemeContext } from './context/Theme'
import Header from './components/Header.tsx';

function App() {
  const theme = useContext(ThemeContext)
  console.log('APP', theme)
  return (
    <div style={{ height: '100vh', width: '100vw', background: theme.colors.background }}>
      <button onClick={() => theme.toggleTheme()}>{theme.theme}</button>
      <Header />
    </div>
  )
}

export default App
