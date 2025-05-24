import React, { useEffect, useState } from 'react'
import { getProductoIndividual } from '../../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../service/config'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null) /**/
    const {idItem} = useParams()

    useEffect(()=>{
        // getProductoIndividual(idItem)
        // .then(respuesta => setProducto(respuesta)) 
        const nuevoDoc = doc(db, "productos", idItem)

        getDoc(nuevoDoc)
            .then(res =>{
                const data = res.data()
                const nuevosProductos = {id:res.id,...data}
                setProducto(nuevosProductos)
            })
            .catch(error => console.log(error))
    }, [idItem])
    
    return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer