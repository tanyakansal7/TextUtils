import React from 'react'
import { useState } from 'react'

export default function TextContainer(props) {
    
    const handleUpClick=(event)=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleReverseClick=(event)=>{
    
        let newText=text.split("").reverse().join("");
        setText(newText)
    }
    const handleLoClick=(event)=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleChange=(event)=>{
    setText(event.target.value)
    }
    const handleClickClear=(event)=>{
        setText("")
    }

    const [text,setText]=useState("")

    return (
        <div className='container my-3'  >
     
<div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleChange} id="textBox" rows="8"></textarea>
</div>
<button type="button" onClick={handleUpClick} className="btn btn-primary mx-2">UpperCase</button>
<button type="button" onClick={handleLoClick} className="btn btn-primary mx-2">LowerCase</button>
<button type="button" onClick={handleClickClear} className="btn btn-secondary mx-2">Clear</button>
<button type="button" onClick={handleReverseClick} className="btn btn-danger mx-2">Reverse</button>
<div className="container my-3" >
    <h3>Your Text Summary</h3>
    <p className='text-info'>{text.split(" ").length-1} words {text.length} characters</p>
    <p className='text-danger'>{0.008*(text.split(" ").length-1)} minutes to read</p>
    <h3>Preview</h3>
    <p className='text-info'>{text}</p>
</div>

        </div>
    )
}

