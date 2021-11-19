import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getFirestore } from "../../firebase/config";
import firebase from "firebase/app";
import "firebase/firestore";
import Swal from "sweetalert2";
import { Redirect } from "react-router";
import { UIContext } from "../context/UIContext";
import { Loader } from "../Loader/Loader";




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

    const handleSubmit = async (e) => {
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

        const order = {
            buyer:{
                ...values
            },
            items: carrito.map((el)=>({id: el.id, precio: el.price, cantidad: el.cantidad})),
            total: calcularTotal(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
        const db = getFirestore()
        const orders = db.collection('orders')
        const itemsToUpdate = db.collection('productos')
            .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(el => el.id))


        const query = await itemsToUpdate.get()

        const batch = db.batch()

        const outOfStock = []

        query.docs.forEach((doc)=>{
            const itemInCart = carrito.find(prod => prod.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad){
                batch.update(doc.ref, {stock: doc.data().stock - itemInCart.cantidad})
            }else{
                outOfStock.push({...doc.data(), id: doc.id})
            }
        })

        if (outOfStock.length === 0){
            batch.commit()
            setLoading(true)
            orders.add(order)
                .then((res) => {
                    console.log(res.id)
                
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: '¡Felicidades, tu compra fue realizada!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    vaciarCarrito()
                })
                .catch((err)=>{
                    console.log(err.id)
                    Swal.fire({
                        icon: 'error',
                        title: '¡Ha ocurrido un error inesperado!',
                        text: 'Vuelva a intentarlo nuevamente mas tarde'
                    })
                    vaciarCarrito()
                })
                .finally(()=>{
                    setLoading(false)
                })
                
        }else{(
            Swal.fire({
                icon: 'error',
                title: '¡No hay suficiente stock!',
                titleText: 'Porfavor volve a intentarlo mas tarde',
                text: outOfStock.map(el => el.name).join(',') 
            })
        )}

    }

    return(
        <>
            {carrito.length === 0 && <Redirect to="/"/>}
            {loading && <Loader/>}
                <div>
                    
                    <h2 className="my-3">¡Ya casi es tuyo, completa los datos para finalizar la compra!</h2>


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