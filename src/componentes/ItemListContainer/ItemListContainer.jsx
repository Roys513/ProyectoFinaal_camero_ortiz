import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../service/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import Spinner from "../Spinner/Spinner"
const ItemListContainer = ()=>{
      const [productos, setProductos] = useState([])
      const [cargando, setCargando] = useState(false);

      const {idCategoria} = useParams()

    useEffect(()=>{
      setCargando(true)
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
        .finally(()=>{
          console.log("Fin del proceso")
          setCargando(false)
        })
    }, [idCategoria])
    return (
      <>
        <div className="i_l_container">
        {cargando ? <Spinner/> : <ItemList albumes={productos}/>}        
        </div>
      </>
  )
}
export default ItemListContainer