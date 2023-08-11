// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import AllPeeps from './components/AllPeeps'

function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<AllPeeps />} />
      </Routes>
    </>
  )
}

export default App
