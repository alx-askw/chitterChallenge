import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { getPeeps } from './utils/backendAPICalls.util.js';
import { loginConfirm } from './utils/authentication/loginCofirm.auth';
import { accountSignUp } from './utils/authentication/signingUpCalls'


// * IMPORTS FOR COMPONENTS
import AllPeeps from './components/AllPeeps.jsx'
import LogInComp from './components/LogInComp.jsx';

//todo: if someone is logged in and they try to /login - redirect?

function App() {

  const [peeps, setPeeps] = useState([]);

  //* Adding the or means that logged persists over page refresh :D
  const [loggedIn, setLoggingIn] = useState(localStorage.getItem('isLoggedIn') || [false]); //TODO: add login/signup functionality, get question answered about auth server being seperate

  const loginHandle = async ({ email, password }) => {
    setLoggingIn(await loginConfirm({ email, password }))
    console.log("logged in state: ", loggedIn);
    localStorage.setItem("isLoggedIn", loggedIn)
  }

  const logOutUser = () => {
    setLoggingIn(false);
    localStorage.removeItem("isLoggedIn")
  }

  const signUpHandle = async (name, userName, email, password, pfpUrl) => {
    await accountSignUp(name, userName, email, password, pfpUrl);
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
    console.log("in use effect: ", loggedIn)
  }, [loggedIn])
  return (
    <>
      <Routes>
        <Route path='/home' element={<AllPeeps peeps={peeps} loggedIn={loggedIn} logOutUser={logOutUser} />} />
        <Route path='/login' element={<LogInComp loggedIn={loggedIn} loginHandle={loginHandle} signUpHandle={signUpHandle} logOutUser={logOutUser} />} />
      </Routes>
    </>
  )
}

export default App
