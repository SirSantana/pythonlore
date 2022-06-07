import Layout from "../../components/Layout/Layout";
import {useState, useEffect} from 'react'
import Form from "../../components/FormCreate/Form";
import { useRouter } from "next/router";

export default function NewProduct(){
    const [user, setUser] = useState(null)
    const router = useRouter()


    const createPosts = async (postData) => {
        try {
          const res = await fetch("/api/productos", {
            method: "POST",
            body: JSON.stringify(postData),
            
          });
          let data = await res.json();
          if (data.success) {
              // reset the fields
              // set the message
              
              return router.push('/panelAdmin/inventario')
          }

        } catch (error) {
          console.log(error);
        }
      };

    useEffect(()=>{
        setUser(localStorage.getItem('profile'))
    },[])
    return(
        <Layout title={'Create | Python'}>
        {user ? <Form createPosts={createPosts}/>: <h2>Denied Access</h2>}
        </Layout>
    )
}

