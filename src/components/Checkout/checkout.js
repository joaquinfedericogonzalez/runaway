import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { Redirect } from "react-router";
import { UIContext } from "../context/UIContext";
import { Loader } from "../Loader/Loader";
import './checkout.css'
import { generarOrden } from "../../firebase/generarOrden";




export const Checkout = () =>{

    const {loading, setLoading} = useContext(UIContext)

    const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(values.nombre.length < 3){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se completo correctamente el campo "Nombre"',
                confirmButtonColor: '#A3D702'
            })
            return
        }

        if(values.apellido.length < 3){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se completo correctamente el campo "Apellido"',
                confirmButtonColor: '#A3D702'
            })
            return
        }

        if(values.email.length < 7){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se completo correctamente el campo "Email"',
                confirmButtonColor: '#A3D702'
            })
            return
        }

        if(values.tel.length < 5){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se completo correctamente el campo "Telefono"',
                confirmButtonColor: '#A3D702'
            })
            return
        }
        setLoading(true)
        generarOrden(values, carrito, calcularTotal())
            .then((res)=>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: '¡Tu compra fue resgistrada!',
                    text:`Numero de orden: ${res}`,
                    showConfirmButton: false,
                    timer: 1500,
                    willClose: () => {
                        vaciarCarrito()
                    }
                })
            })
            .catch((err)=>{
                Swal.fire({
                    icon: 'error',
                    title: '¡No hay stock disponible!',
                    text: `El producto ${err.map(el => el.name).join(',')} no tiene stock disponible para esta compra`,
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return(
        <>
            {carrito.length === 0 && <Redirect to="/"/>}
            {loading && <Loader/>}
                <div>
                    
                    <h2 className="my-3 text">¡Ya casi es tuyo, completa los datos para finalizar la compra!</h2>


                    <div className="container my-5">
                        <form onSubmit={handleSubmit}>
                            <h5>Todos los campos son obligatorios</h5>
                            <input
                                className="form-control my-2"
                                type="text"
                                placeholder="Nombre"
                                name="nombre"
                                value={values.nombre}
                                onChange={handleInputChange}
                                />
                            {values.nombre.length === 0 }

                            <input
                                className="form-control my-2"
                                type="text"
                                placeholder="Apellido"
                                name="apellido"
                                value={values.apellido}
                                onChange={handleInputChange}
                                />
                            {values.apellido.length === 0}

                            <input
                                className="form-control my-2"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                            />
                            {values.email.length === 0}

                            <input
                                className="form-control my-2"
                                type="tel"
                                placeholder="Telefono"
                                name="tel"
                                value={values.tel}
                                onChange={handleInputChange}
                            />
                            {values.email.length === 0}

                            <button className="btn mx-3" type="submit" disabled={loading}>Finalizar</button>
                        </form>
                    </div>
                </div>
        </>

    )


}