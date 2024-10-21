import { useState } from 'react';
import './App.css';

function App() {

 const [color,Setcolor]= useState("olive")
  



  return (
    <div className="App">
     <h1 className=' p4  text-3xl bg-slate-500 text-zinc-50' >Background Changer</h1>
     <div className='w-full h-screen duration-200'
     style ={{backgroundColor:color}}>
      
      <div className='fixed flex flex-wrap justify-center buttom-12 inset-x-0 px-2'>
        
        <div className="flex flex-wrap justify-center gap-10 shadow-lg bg-white px-3 py-2 rounded-3xl">
        
        <button className='outline-none px-4 bg-red-600 text-white shadow-lg ' onClick={()=> Setcolor("Red")}> Red Color </button>
        <button className='outline-none px-4 bg-white text-black shadow-lg ' onClick={()=>Setcolor("White")}> White Color </button>
        <button className='outline-none px-4 bg-black text-white shadow-lg ' onClick={()=>Setcolor("Black")}> Black Color </button>
        <button className='outline-none px-4 bg-yellow-300 text-black shadow-lg ' onClick={()=>Setcolor("Yellow")}> Yellow Color </button>
   

        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
