import React, { useState } from "react";
//  usestate is one of the react hook

export default function Textform(props) {
  
  const uppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alerts("converted to UpperCase !","success");
  };
  const lowercase = () => {
    let d = text.toLowerCase();
    setText(d);
    props.alerts("converted to LowerCase !","success");
  };
  const clear=()=>{
    let clr='';
    setText(clr); 
    props.alerts("Text cleared !","success");
  
  };
const  copytext=()=>{
  let text=document.querySelector("#mytext");
text.select();
navigator.clipboard.writeText(text.value);
props.alerts("copied to clipboard !","success");
  }

  const handleextraspaces=()=>{
let newText=text.split(/\s+/);
setText(newText.join(" "));
props.alerts(" Extra spaces are removed !","success");
  };
  const handler = (event) => {
    setText(event.target.value);
  };
  //rember this syntax of text,setText:
  const [text, setText] = useState("");
//   const [mystyle, setMystyle] = useState( {
//     color:'black',
//     backgroundColor:'white'
//    } );
//    const [btntext,setbtntext]=useState("DarkMode");
//   const toggle=()=>{
//     if(mystyle.color==='white'){
//   setMystyle({
// color:'black',
// backgroundColor:'white'
//   })
//   setbtntext("DarkMode");
//     }
//     else
//     {
//       setMystyle({
//         color:'white',
//         backgroundColor:'black',

//           })
//           setbtntext("LightMode");
//     }

//   };
  return (
    <>
      <div style={{color:props.mode==='light'?'black':'white'} } >
        <h1>{props.heading}</h1>

        <div className="mb-3"  >
          <textarea 
          //style={mystyle}
            className="form-control"
            id="mytext"
            rows="8"
            value={text}
            onChange={handler}
            style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}
          ></textarea>
        </div>
        {/* <button type="button" className="btn btn-secondary mx-2" onClick={toggle}  >
        {btntext}
        </button> */}
        <button type="button" className="btn btn-primary" onClick={uppercase}>
          Convert to UpperCase
        </button>
        <button type="button" className="btn btn-primary mx-2" onClick={lowercase}>
          convert to LowerCase
        </button>
        <button type="button" className="btn btn-primary" onClick={handleextraspaces}>
           Remove Spaces
        </button>
        <button type="button" className="btn btn-primary mx-2" onClick={copytext}>
           Copy Text
        </button>
        <button type="button" className="btn btn-danger mx-1" onClick={clear}>
          Clear
        </button>

      </div>
      <div className="container my-3" style={{color:props.mode==='light'?'black':'white'} }>
        <h1>Your text summary </h1>
        <p>
          {" "}
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        {/* to read a 125 words we require 1 min by google */}
        <p>
          {" "}
          to read {text.split(" ").length - 1} words you require{" "}
          {0.008 *( text.split(" ").length-1)} min{" "}
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above text area to preview it here"}</p>
      </div>
    </>
  );
}
