import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import AllPeeps from './components/AllPeeps'
import { getPeeps } from './utils/backendAPICalls.util.js';

function App() {

  const [peeps, setPeeps] = useState([]);

  //todo: make this a bit nicer/professional
  const backendDevLink = 'http://localhost:3000'
  const getThePeeps = async () => {
    try {
      const getAllthePeeps = await getPeeps(backendDevLink);
      setPeeps(getAllthePeeps.data);
      // console.log(peeps)
    } catch (e) {
      console.log(e)
      setPeeps([]);
    }
  }
  useEffect(() => {
    getThePeeps();
  }, [])
  return (
    <>
      <Routes>
        <Route path='/home' element={<AllPeeps peeps={peeps} />} />
      </Routes>
    </>
  )
}

export default App
