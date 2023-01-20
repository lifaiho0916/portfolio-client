//Dependencies
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Image } from "react-bootstrap";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";

import Routes from "./Routes";
import Logo from './images/logo.png';
import back_arrow from './images/back_arrow.png';
import "./App.css";
import { FaStepBackward } from "react-icons/fa";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const history = useHistory();
  const [isBack,setBack] = useState(false);
  useEffect(() => {
    let cur_url = window.location.href;
    setBack(!(cur_url.includes('home') || cur_url.includes('about') || cur_url.includes('contact') || cur_url.includes('protfolio') || cur_url.includes('store') || cur_url.includes('#')));
    console.log(isBack);
    onLoad();
  }, []);

  async function onLoad() {
    
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    history.push("/login");
  }

  

  return (
    !isAuthenticating && (
      <div className="App">
        <Navbar fixed='top' collapseOnSelect expand='lg' className="mb-3" >
          <Navbar.Brand href="/">
            <Image src={Logo} className="logo">

            </Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="col-md-offset-3" style={{}} id="responsive-navbar-nav">
            <Nav activeKey={window.location.pathname} style={{'justifyContent' : 'flex-end', 'height':'100%'}}>
              {!(window.location.href.includes('home') || window.location.href.includes('#') || window.location.href.includes('about') || window.location.href.includes('contact') || window.location.href.includes('protfolio') || window.location.href.includes('store')|| isBack) ? (
                <Nav.Link className={"nav-link" + (window.location.href.includes('about') ? 'striked' : '')} href="/contact"><Image src={back_arrow}/></Nav.Link>
              ) : (
              <>
                <Nav.Link className={"nav-link" + (window.location.href.includes('home') || window.location.href.includes('#')? ' striked' : '')} href='/#home' >Home</Nav.Link>
                <Nav.Link className={"nav-link" + (window.location.href.includes('portfolio') ? ' striked' : '')} href="/allworks">Portfolio</Nav.Link>
                <Nav.Link className={"nav-link" + (window.location.href.includes('about') ? ' striked' : '')} href="/about">About</Nav.Link>
                <Nav.Link className={"nav-link" + (window.location.href.includes('contact') ? ' striked' : '')} href="/contact">Contact</Nav.Link> 
                {/* <Nav.Link className={"nav-link" + (window.location.href.includes('store') ? ' striked' : '')} href="/store">Store</Nav.Link> */}
              </>
              )}
              {/* {isAuthenticated ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <>
                  <Nav.Link className='nav-link' href='/signup'>Signup</Nav.Link>
                  <Nav.Link className='nav-link' href='/login'>Login</Nav.Link>
                </>
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </div >
    )
  );
}

export default App;