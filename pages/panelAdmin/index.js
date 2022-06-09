import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import Admin from "../../components/Admin";

export default function PanelAdmin(){
    const [user, setUser] = useState(null)

    useEffect(()=>{
        setUser(localStorage.getItem('profile'))
    },[])
    console.log(user);
    return(
        <>
        <Layout>
            {user ? <Admin/> : <h2>Permiso Denegado</h2>}
        </Layout>
        </>
    )
}