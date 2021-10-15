import React from 'react'
import { Link } from 'react-router-dom';
import {Carrito} from './carrito';
import {Logo} from './carrito';

export const Nav = () => {
    return(
        <header>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="./index.html"><Logo/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
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
                            
                        </ul>
                    </div>
                    <Link className="nav-link" to="/carrito"><Carrito/></Link>
                </nav>
            </div>
            
        </header>
    )
}
