import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextContainer from './components/TextContainer'

function App() {
 
  
  const [mode, setMode]=useState('dark')
   const toggleMode=()=>{
     if(mode==='light'){
       setMode('dark')
       document.body.style.backgroundColor='white'
       document.body.style.color='#192734'
       document.getElementById('textBox').style.backgroundColor='white'
       document.getElementById('textBox').style.color='black'
     } 
     else{
       setMode('light')
       document.body.style.backgroundColor='#192734'
       document.body.style.color='white'
       document.getElementById('textBox').style.backgroundColor='#8899A6'
       document.getElementById('textBox').style.color='white'
     }
   }
  return (
    <>
  
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <TextContainer heading="Enter text below"/>
 
    </>
    
  );
}

export default App;
