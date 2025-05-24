import React, { useState } from 'react'

const ItemCount = ({stock, inicial, funcionAgregar}) => {
  
    const [contador, setContador] = useState(inicial)

    const incrementar = ()=> {
        if (contador < stock){
            setContador(contador + 1)
        }
    }

    const disminuir = ()=> {
        if (contador > inicial){
            setContador(contador -1)
        }
    }

    return (
    <div className='item_count'>
        <div className='contador'>
            <button className='boton_incrementar' onClick={incrementar}> + </button> <p className='numero_contador'>{contador}</p> 
            <button className='boton_disminuir' onClick={disminuir}> - </button>
        </div>
        <div>
            <p className='texto_stock_disponible'>Quedan {stock} en stock</p>
            <button className="boton_carrito" onClick={()=> funcionAgregar(contador)}>Agregar al carrito</button>
        </div>

    </div>
  )
}

export default ItemCount