import PropTypes from 'prop-types';
import React, { useState } from 'react'
import './TextForm.css';


export default function TextForm(props)

{
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value)
    }

   


    const [text, setText] = useState('');
    // setText("new text");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="box">
            <textarea className="text-area" value={text}  onChange={handleOnChange} 
            placeholder='enter text here' id="textarea"></textarea>
</div>
  <div className="para">
<p> Words :  {text.split(" ").length-1}</p>
</div>
</div>

  )
}