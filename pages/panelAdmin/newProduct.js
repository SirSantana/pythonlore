import Layout from "../../components/Layout/Layout";
import {useState, useEffect} from 'react'
import Form from "../../components/FormCreate/Form";

export default function NewProduct(){
    const [user, setUser] = useState(null)

    useEffect(()=>{
        setUser(localStorage.getItem('profile'))
    },[])
    return(
        <Layout title={'Create | Python'}>
        {user ? <Form/>: <h2>Denied Access</h2>}
        </Layout>
    )
}