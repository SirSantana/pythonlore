import Inventario from "../../components/Inventario/Inventario";
import Layout from "../../components/Layout/Layout";
import {useState, useEffect} from 'react'

export default function InventarioServer({posts}){
    const [user, setUser] = useState(null)
    useEffect(()=>{
        setUser(localStorage.getItem('profile'))
    },[])
    return(
        <Layout title={'Inventario | Python'}>
            {user && posts?.message?.map(el=> <Inventario key={el._id} el={el}/>)}
        </Layout>
    )
}

export async function getServerSideProps() {
    // get the current environment
    // request posts from api
    let response = await fetch(`https://pythonjoyas.vercel.app/api/productos`);
    // extract the data
    let data = await response.json();

    return {
        props: {
            posts: data,
        },
    };
}