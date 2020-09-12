import React from "react";
import { Button, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';


export default function header(){
    return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Water-Works 	&#169;</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      {/* <Nav.Link href="#link">Service</Nav.Link> */}
      <Nav.Link href="#link">Contact</Nav.Link>
      <NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Maintenance</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Residental Service</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Commercial Service</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        
       
    );
}





{/* <div className="header">
<div className="header-top">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
            </div>
            <div className="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
                <a href="tel:+880 012 3654 896">+880 012 3654 896</a>
                <a href="mailto:support@colorlib.com">support@colorlib.com</a>				
            </div>
        </div>			  					
    </div>
</div>
<div className="container main-menu">
  <div className="row align-items-center justify-content-between d-flex">
    <div id="logo">
      <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
    </div>
    <nav id="nav-menu-container">
      <ul className="nav-menu">
        <li className="menu-active"><a href="index.html">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Service</a></li>
        <li><a href="">Projects</a></li>
        <li className="menu-has-children"><a href="">Blog</a>
          <ul>
            <li><a href="blog-home.html">Blog Home</a></li>
            <li><a href="blog-single.html">Blog Single</a></li>
          </ul>
        </li>						          
        <li><a href="contact.html">Contact</a></li>
        <li><a href="elements.html">Elements</a></li>
      </ul>
    </nav>		    		
  </div>
</div>
</div> */}