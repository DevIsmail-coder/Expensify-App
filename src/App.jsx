
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Expensify from './Component/Expensify/Expensify'
// import Login from './Component/Login/Login'
import Signup from './Component/Signup/Signup'
import Food from './Component/Food/Food'
import Profile from './Component/Profile/Profile'
function App() {


  return (
    <div className='Appbody'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Expensify />} />
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/signup' element={<Signup />} />
          <Route path='/food' element={<Food />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
