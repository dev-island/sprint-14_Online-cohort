import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import { ThemeContext } from './context/Theme'
import styled from 'styled-components'
import Main from './components/Main'

function App() {
  return (
    <>
      <Nav />
      <Container>
        <SideBar />
        <Main />
      </Container>
    </>
  )
}

export default App

const Container = styled.div`
  display: flex;
`