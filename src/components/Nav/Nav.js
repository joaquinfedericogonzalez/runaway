import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {Carrito, Logo} from '../Nav/carrito';
import { NavDropdown } from "react-bootstrap";
import './Nav.css'

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
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><b>INICIO</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/productos"><b>PRODUCTOS</b></Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" to="/envios"><b>ENVIOS</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto"><b>CONTACTO</b></Link>
                            </li>
                            <b><NavDropdown style={{ margin: 0 }} title="CATEGORIAS" id="basic-nav-dropdown">
                                    <NavLink className="nav-link" exact to="/productos/pantalones"><b>PANTALONES</b></NavLink>
                                    
                                    <NavLink className="nav-link" exact to="/productos/mochilas"><b>MOCHILAS</b></NavLink>

                                    <NavLink className="nav-link" exact to="/productos/blazers y conjuntos"><b>BLAZERS Y CONJUNTOS</b></NavLink>
                                    
                                    <NavLink className="nav-link" exact to="/productos/camperas"><b>CAMPERAS</b></NavLink>

                            </NavDropdown></b>
                        </ul>
                    </div>
                </nav>
            </div>
            
        </header>
    )
}
