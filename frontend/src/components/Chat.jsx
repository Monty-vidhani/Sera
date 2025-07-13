import React from 'react' 
import { useState } from 'react'
import axios from 'axios' ;


const Chat = () => {
const [question,setQuestion] = useState("");
const [response, setResponse] = useState("") ; 
const [loading, setLoading] = useState(false)

async function getAnswer(e) {
  
  setQuestion("") ;
  if (!question.trim()) return;

  setLoading(true);
  setResponse("");
  try{
    const res = await axios({
        url: `${import.meta.env.VITE_API_BASE}/api/chat`, // replace with your own backend endpoint
        method: "POST",
        data: {
          question: question
        }
      });

      const text = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
      setResponse(text);
  }catch (error) {
      console.error("Error:", error);
      setResponse("Something went wrong.");
    }finally {
    setLoading(false);
  }
}
  return (
    <div className='h-150 w-150 px-4 flex flex-col justify-around items-center bg-white rounded-2xl'>
 {loading ? (
    <pre className='h-8/10 w-9/10 flex justify-center items-center overflow-y-scroll no-scrollbar text-black animate-pulse'>Loading.......</pre>
  ) : (
    <pre  className='h-8/10 w-9/10 overflow-scroll no-scrollbar text-wrap text-black '>{response}</pre>
  )}



<div className='h-1/10 w-full p-2 flex justify-around items-center'>
      <input className='h-9/10 w-8/10 bg-white border-2 px-2 rounded-4xl text-black' type="text" value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder="Ask me anything..." />
      <button onClick={getAnswer} className='rounded-4xl bg-blue-500 text-white'>enter</button>
</div>
</div>
  )
}


export default Chat