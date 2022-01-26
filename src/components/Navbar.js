import React from 'react';
import PropTypes from 'prop-types';
export default function Navbar(props) {
const toggleSuccess=()=>{
  document.body.style.backgroundColor='#006400'
  document.body.style.color='white'
}
const toggleDanger=()=>{
  document.body.style.backgroundColor='	#8B0000'
  document.body.style.color='white'
}
const toggleWarning=()=>{
  document.body.style.backgroundColor= '#666600'
  document.body.style.color='white'
}
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode===`light`?`dark`:`light`} bg-${props.mode===`light`?`dark`:`light`}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
             
             
            </ul>
            <button type="button" class="btn btn-success mx-2"  onClick={toggleSuccess}></button>
            <button type="button" class="btn btn-danger mx-2"  onClick={toggleDanger}></button>
            <button type="button" class="btn btn-warning mx-2" onClick={toggleWarning}></button>
            <div className={`form-check form-switch text-${props.mode}`} onClick={props.toggleMode}  >
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode} Mode</label>
          </div>
            
          </div>
          
        </div>
      </nav>
    )
    
}
Navbar.propTypes={
    title: PropTypes.string
};