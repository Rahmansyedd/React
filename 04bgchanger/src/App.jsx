import { useState } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState('olive')
  


  // function changeColor(color){
  //   setcolor(color)
  // }

  return (
    <div className='w-full h-screen duration-200 ' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-content-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setcolor('red')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{ backgroundColor: 'red' }}>red</button>
          <button onClick={() => setcolor('green')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{ backgroundColor: 'green' }}>green</button>
          <button onClick={() => setcolor('blue')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{ backgroundColor: 'blue' }}>blue</button>
          <button onClick={() => setcolor('orange')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{ backgroundColor: 'orange' }}>orange</button>
          <button onClick={() => setcolor('black')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-white' style={{ backgroundColor: 'black' }}>black</button>
        </div>
      </div>
    </div>
  )
}


export default App