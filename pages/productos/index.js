import Layout from "../../components/Layout/Layout";
import Productos from "../../components/Productos";
export default function ProductosPage({products}){
    return(
        <>
        <Layout title={'Productos | Python'}>
        <h2 style={{margin:0, color:'white'}}>Productos</h2>
        {products?.map(el=> <Productos el={el} key={el._id}/>)}
        </Layout>
        </>
    )
}
export async function getStaticProps(){
    try {
        const res = await fetch('https://pythonjoyas.vercel.app/api/products')
        const data = await res.json()

        return{
            props:{
                products:data
            }
        }
    } catch (error) {
        console.log(error)
    }
}
// export async function getServerSideProps() {
//     // get the current environment
//     // request posts from api
//     let response = await fetch(`https://pythonjoyas.vercel.app/api/productos`);
//     // extract the data
//     let data = await response.json();

//     return {
//         props: {
//             posts: data,
//         },
//     };
// }