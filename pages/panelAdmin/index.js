import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";

export default function PanelAdmin(){
    const [user, setUser] = useState(null)

    useEffect(()=>{
        setUser(localStorage.getItem('profile'))
    },[])
    return(
        <>
        <Layout>
            {user ? <h2 style={{color:'white'}}>Bienvenida Lore</h2>: <h2>Permiso Denegado</h2>}
        </Layout>
        </>
    )
}