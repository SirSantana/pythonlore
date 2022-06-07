import Layout from "../../components/Layout/Layout";
import Productos from "../../components/Productos";
import { getItemData, getPathsIds } from "../../libs/items"


export default function Product({post}){
  const {data} = post
    return( 
        <Layout title={'Product | Python'}>
         <Productos el={data} key={data.id}/>
        </Layout>
    )
}
export async function getStaticPaths() {
    const paths = await getPathsIds();
    return {
      paths,
      fallback:false
    }
  }

export async function getStaticProps({params}){
  const id = params.id
  const post = await getItemData(id)
  return{
    props:{
      post
    }
  }
}

