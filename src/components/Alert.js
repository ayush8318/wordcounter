 import React from 'react'
 
 function Alert(props) {
    const capitalize=(string)=>{
        let lower=string.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
   return (
    props.al&&  <div class={`alert alert-${props.al.typ} alert-dismissible fade show`} role="alert">
    <strong> {capitalize(props.al.typ)}</strong>:  {props.al.msg}
    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div>
  
   )
 }
 
 export default Alert
 