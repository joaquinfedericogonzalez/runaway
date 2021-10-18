import React from 'react'
import { Link } from 'react-router-dom';
import {Carrito} from './carrito';
import {Logo} from './carrito';
import { NavDropdown} from "react-bootstrap";

export const Nav = () => {
    return(
        <header>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/"><Logo/></Link>
                    <Link className="nav-link" to="/carrito"><Carrito/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link" exact to="/"><b>INICIO</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" exact to="/productos"><b>PRODUCTOS</b></Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" exact to="/envios"><b>ENVIOS</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" exact to="/contacto"><b>CONTACTO</b></Link>
                            </li>
                            <b><NavDropdown title="MAS PRODUCTOS" id="basic-nav-dropdown">
                                    <NavDropdown.Item className="fondo"><Link className="nav-link" exact to="/productos/pantalones"><b>PANTALONES</b></Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="fondo"><Link className="nav-link" exact to="/productos/mochilas"><b>MOCHILAS</b></Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="fondo"><Link className="nav-link" exact to="/productos/blazers y conjuntos"><b>BLAZERS - CONJUNTOS</b></Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="fondo"><Link className="nav-link" exact to="/productos/camperas"><b>CAMPERAS</b></Link></NavDropdown.Item>
                            </NavDropdown></b>
                        </ul>
                    </div>
                </nav>
            </div>
            
        </header>
    )
}
