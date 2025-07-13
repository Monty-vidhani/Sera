import { useState } from 'react'
import './App.css'

import Chat from "./components/Chat.jsx"
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";

import LandingPage from './components/LandingPage.jsx';
// import LandingPage from './components/LandingPage.jsx'

const router  = createBrowserRouter(
  [
    {
      path:'/',
      element:<LandingPage/>
    },
    {
      path:"/Chat",
      element:<Chat/>
    },
  ]
)

const App = ()=>{

  return (
<>
{/* <div className='h-150 w-150 px-4 flex flex-col justify-around items-center bg-white rounded-2xl'>
 {loading ? (
    <pre className='h-8/10 w-9/10 flex justify-center items-center overflow-y-scroll no-scrollbar text-black animate-pulse'>Loading.......</pre>
  ) : (
    <pre  className='h-8/10 w-9/10 overflow-scroll no-scrollbar text-wrap text-black '>{response}</pre>
  )}



<div className='h-1/10 w-full p-2 flex justify-around items-center'>
      <input className='h-9/10 w-8/10 bg-white border-2 px-2 rounded-4xl text-black' type="text" value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder="Ask me anything..." />
      <button onClick={getAnswer} className='rounded-4xl bg-blue-500 text-white'>enter</button>
</div>
</div> */}
<RouterProvider  router={router} />
  {/* <div className='h-150 w-150 px-4 flex flex-col justify-around items-center bg-white rounded-2xl'>
    <img className='h-8/10 w-9/10' src={robot} alt="robot.png" />
    <button className='rounded-4xl bg-blue-500 text-white'>Get started</button>
</div> */}
{/* <LandingPage/> */}


</>
  )
}

export default App
