import React from 'react'
import { useNavigate } from 'react-router-dom';
import robot from "../assets/cute-robot-cartoon-free-vector.jpg" ;
import Chat from "../components/Chat.jsx"


const LandingPage = () => {
const navigate = useNavigate() ; 
    function handleClick(){
  navigate('/Chat') ;
}
  return (

     <div className='h-150 w-150 px-2 flex flex-col justify-evenly items-center bg-white rounded-2xl'>
        <img className='h-7/10 w-9/10' src={robot} alt="robot.png" />
        <h1 className='text-black'>Your Personal AI Chat Bot</h1>
        <button onClick={handleClick} className='rounded-4xl bg-blue-500 text-white'>Get started</button>
    </div>
  )
}

export default LandingPage