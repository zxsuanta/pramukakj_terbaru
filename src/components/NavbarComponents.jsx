import {useEffect, useState} from "react";
import {Navbar, Container, Nav} from "react-bootstrap"

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponents = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if(window.scrollY > 10){
      setChangeColor(true);
    }else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  })
  
  return( 
    <div>  
        <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
            <Container>
              <Navbar.Brand href="#home" ><img className="nav-logo" src="./src/assets/img/poster/logo1.png" alt="" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto text-center">
                  {navLinks.map((link) => {
                    return (
                        <div className="nav-link fw-bold" key={link.id}>
                            <NavLink to={link.path}  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                          } end>{link.label}</NavLink>
                        </div>
                    );
                  })}
                  </Nav> 

                  <input className="form-control w-25" list="datalistOptions" id="exampleDataList" placeholder="Search"/>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default NavbarComponents;