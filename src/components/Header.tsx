import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import { useLocation } from 'react-router'



const PageLink =()=>{
  let location = useLocation().pathname
  if(location==='/applicant'){
   return <>
    <Nav.Link href="#resume">Resume</Nav.Link>
    <Nav.Link href="#testimonial">Testimonial</Nav.Link>
    </>
  }
  else{
    return <>
    <Nav.Link href="#service">Services</Nav.Link>
    <Nav.Link href="#applicant">Applicant</Nav.Link>
    </>
  }
}

interface Props {
    
}

export const Header = (props: Props) => {
    
    return (

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">JOBCALL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <PageLink/>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    )
}
