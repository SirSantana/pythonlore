import Inventario from "../../components/Inventario/Inventario";
import Layout from "../../components/Layout/Layout";
import {useState, useEffect} from 'react'
import { products } from "../../services/products";
export default function InventarioServer(){
    const [user, setUser] = useState(null)
    useEffect(()=>{
        setUser(localStorage.getItem('profile'))
    },[])
    return(
        <Layout title={'Inventario | Python'}>
            <h2 style={{margin:0, color:'white'}}>Productos</h2>
             {products?.map(el=> <Inventario key={el._id} el={el}/>)}
        </Layout>
    )
}
