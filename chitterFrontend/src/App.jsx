import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { getPeeps } from './utils/backendAPICalls.util.js';
import { loginConfirm } from './components/authentication/loginCofirm.auth';


// * IMPORTS FOR COMPONENTS
import AllPeeps from './components/AllPeeps.jsx'
import LogInComp from './components/LogInComp.jsx';

//todo: if someone is logged in and they try to /login - redirect?

function App() {

  const [peeps, setPeeps] = useState([]);

  const [loggedIn, setLoggingIn] = useState([false]); //TODO: add login/signup functionality, get question answered about auth server being seperate

  const loginHandle = async ({ email, password }) => {
    setLoggingIn(await loginConfirm({ email, password }))
  }


  //todo: make this a bit nicer/professional
  const backendDevLink = 'http://localhost:3000'
  const getThePeeps = async () => {
    try {
      const getAllThePeeps = await getPeeps(backendDevLink);
      setPeeps(getAllThePeeps.data);
      // console.log(peeps)
    } catch (e) {
      console.log(e)
      setPeeps([]);
    }
  }
  useEffect(() => {
    getThePeeps();
    // console.log(loggedIn)
  }, [])
  return (
    <>
      <Routes>
        <Route path='/home' element={<AllPeeps peeps={peeps} loggedIn={loggedIn} />} />
        <Route path='/login' element={<LogInComp loggedIn={loggedIn} loginHandle={loginHandle} />} />
      </Routes>
    </>
  )
}

export default App
