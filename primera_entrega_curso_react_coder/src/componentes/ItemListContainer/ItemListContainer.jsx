import { useEffect, useState } from "react"
// import { getProductos, getProductosPorCategoria } from "../../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../service/config"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = ()=>{
      const [productos, setProductos] = useState([])


      const {idCategoria} = useParams()

    useEffect(()=>{
      // const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
      // funcionProductos(idCategoria)
      // .then(res=> setProductos(res))
      const misProductos = idCategoria ? query(collection(db,"productos"),where("idCat","==",idCategoria)) : collection(db,"productos");

      getDocs(misProductos)
        .then(res =>{
          const nuevosProductos = res.docs.map(doc=>{
            const data = doc.data()
            return {id:doc.id,...data}
          })
          setProductos(nuevosProductos)
        })
        .catch(error => console.log(error))
    }, [idCategoria])
    return (
      <>
        <div className="i_l_container">

        <ItemList albumes={productos}/>
        
        </div>
      </>
  )
}
export default ItemListContainer