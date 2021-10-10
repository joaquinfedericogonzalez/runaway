import React from 'react'
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
                                <a className="nav-link" href="#"><b>INICIO</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><b>PRODUCTOS</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><b>ENVIOS</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><b>CONTACTO</b></a>
                            </li>
                            
                        </ul>
                    </div>
                    <a href="#"><Carrito/></a>
                </nav>
            </div>
            
        </header>
    )
}
