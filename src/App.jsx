import React from 'react'
import './App.css'
import Navbar from './Componets/Navbar/Navbar'
import Contents from './Componets/Contents/Contents'
import { Routes , Route, useLocation } from 'react-router-dom'
import SearchBar from './Componets/SearchBar/SearchBar'
import CreatePost from './Componets/CreatePost/CreatePost'
import Profile from './Componets/Profile/Profile'
import ContentDetails from './Componets/Contents/ContentDetails'
import SignUp from './Componets/SignUp/SignUp'
import Login from './Componets/Login/Login'
import ForgetPassword from './Componets/ForgetPassword/ForgetPassword'

function App() {

  const locationData = useLocation()

  
  const hidePath = ["/signup", "/login", "/forgetpassword"];
  const navBarHide = hidePath.includes(locationData.pathname);
 


  return (
   <>


<Routes>

<Route path="/" element={<Contents/> } />
<Route path="/search" element={<SearchBar/> } />
<Route path="/create" element={<CreatePost/>} />
<Route path="/profile" element={<Profile/>} />
<Route path="/note/:id" element={<ContentDetails/>} />
<Route path="/signup" element={<SignUp/>} />
<Route path="/login" element={<Login/>} />
<Route path="/forgetpassword" element={<ForgetPassword/>} />

</Routes>



<Navbar className={`${navBarHide?"hidden":"flex"}  `} />
   </>
  )
}

export default App
