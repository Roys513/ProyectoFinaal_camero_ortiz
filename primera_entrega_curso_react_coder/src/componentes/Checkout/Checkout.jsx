import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../service/config'
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'

const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const{carrito, vaciarCarrito, total, totalCantidad} = useContext(CartContext)
    console.log()

    const manejadorFormulario = (e) => {
        e.preventDefault()

        if(!nombre || !apellido || !direccion || !telefono || !email){
            setError("Por favor, asegúrate de completar todos los campos")
            return
        }
    
    const orden = {
        items: carrito.map(producto =>({
            id: producto.item.id,
            nombreProducto: `${producto.item.nombreArtista} - ${producto.item.album}`, 
            cantidad: producto.cantidad
        })),
        total: total,
        fecha: new Date(),
        nombre, 
        apellido,
        direccion,
        telefono,
        email
    }

    Promise.all(
        orden.items.map(async(productoOrden) => {
            const productoRef = doc(db,"productos",productoOrden.id)
            const productoDoc = await getDoc(productoRef)
            const stockActual = productoDoc.data().stock 

            await updateDoc(productoRef,{
                stock: stockActual - productoOrden.cantidad
            })
        })
    )

    .then(() => {
        addDoc(collection(db,"ordenes"), orden)
            .then(docRef =>{
                setOrdenId(docRef.id)
                vaciarCarrito()
            })
            .catch(error =>{
                console.log("Ha habido un error al crear la orden", error)
                setError("Ha habido un error al crear la orden")
            })
        })
        .catch((error) =>{
            console.error("No ha podido actualizarse el stock")
            setError("No ha podido actualizarse el stock")
    })
    }

  return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={manejadorFormulario}>
            {
                carrito.map(producto =>(
                    <div key={producto.item.id}>
                        <p>{producto.item.nombreArtista}x{producto.cantidad}</p>
                        <p>{producto.item.precio}</p>
                    </div>
                ))
            }
            <div>
                <label>Nombre: </label>
                <input type="text" onChange={(e) => setNombre(e.target.value)}/>
                <label>Apellido: </label>
                <input type="text" onChange={(e) => setApellido(e.target.value)}/>
                <label>Dirección: </label>
                <input type="text" onChange={(e) => setDireccion(e.target.value)}/>
                <label>Teléfono: </label>
                <input type="number" onChange={(e) => setTelefono(e.target.value)}/>
                <label>email: </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            {
                error && <p style={{color:"red"}}>{error}</p>
            }
            <button type='submit'>Finalizar compra</button>
        </form>
        {ordenId && (
            <div>
                <h4>¡Gracias por tu compra!</h4>
                <p>Tu número de orden es: <strong>{ordenId}</strong></p>
            </div>
        )}
    </div>
    )
}

export default Checkout