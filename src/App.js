import Counter from './Counter_main';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter,setCounter]=useState([])
  return (
    <>
    <div className='click_btn'>
      <button className='click' onClick={()=>{
        setCounter((counter)=>{
          return[...counter,<Counter index={counter.length}/>]
        })
      }}>➕</button>
    </div>
    <div className='content'>
      {counter}
      </div>
    </>
  );
}

export default App;
