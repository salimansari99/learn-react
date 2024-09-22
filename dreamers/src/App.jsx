import React, { useState, useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux';
import {login, logout} from "./store/authSlice"
import authService from './appwrite/auth';
import {Header, Footer} from "./components/index"
import {Outlet} from "react-router-dom";

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false));
  },[])

  // console.log(import.meta.env.VITE_APPWRITE_URL);
  // return (
  //   <>
  //     <div>
  //       <h1>Welcome to Dreamers App</h1>
  //     </div>
  //   </>
  // )

  return !loading ? (
    <div className='min-h-sc flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ): null;

}

export default App
