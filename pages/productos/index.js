/* eslint-disable @next/next/no-sync-scripts */
import Layout from "../../components/Layout/Layout";
import Productos from "../../components/Productos";
import { products } from "../../services/products";
export default function ProductosPage(){
    console.log(products);
    return(
        <>
        <Layout title={'Productos | Python'}>
        
        <h2 style={{margin:0, color:'white'}}>Productos</h2>
        {products?.map(el=> <Productos el={el} key={el.id}/>)}
        </Layout>
        </>
    )
}
