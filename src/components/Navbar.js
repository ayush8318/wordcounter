//write rfc
import React from 'react'
// use of props ,with the help of props we pass every thing as variable then update the variable according to our need.
// use of prop types :If we pass to many parameters in string ,int ,object then it is hard to find the error that in string we pass int for this we use  props types.
// to import props types wtite impt
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
//in navbar replace a with link anf href with to
//for git and github do the vice vsersa of link
export default function Navbar(props) {
  return (
    <nav   className= {`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
    <div   className="container-fluid">
      <a a className="navbar-brand"    href="#">{props.title} </a>
      <button   className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span   className="navbar-toggler-icon"></span>
      </button>
      <div   className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul   className="navbar-nav me-auto mb-2 mb-lg-0">
          <li   className="nav-item">
            <a className="nav-link active" aria-current="page"   href="#">Home</a>
          </li>
          <li   className="nav-item">
            <a  className="nav-link active"     href="#">{props.about}</a>
          </li>
          
           
        </ul>
        {/* <form   className="d-flex" role="search">
          <input   className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button   className="btn btn-danger" type="submit">Search</button>
        </form> */}
         
         
<div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input "  onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'dark':'light'}</label>
</div>

 
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes={
title:PropTypes.string.isRequired,
about:PropTypes.string
}
// creating default props

Navbar.defaultProps={
    title:'Textutils'
};
