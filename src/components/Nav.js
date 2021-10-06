import React from 'react'
import {Carrito} from './carrito';

export const Nav = () => {
    return(
        <header>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="./index.html">RunAway</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tienda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Envios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            
                        </ul>
                    </div>
                    <a href="#"><Carrito/></a>
                </nav>
            </div>
            
        </header>
    )
}

const ItemListContainer = (props) => {
    return(
        <div>
            <h1>Catalogo de ropa</h1>
        </div>
    )
}