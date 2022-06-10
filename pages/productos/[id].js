import Layout from "../../components/Layout/Layout";
import Producto from "../../components/Productos/product";
import { connectToDatabase } from "../../lib/dbConnect";

export default function Product({ posts }) {
  return (
    <Layout title={"Product | Python"}>
      <Producto el={posts} />
    </Layout>
  );
}
export async function getServerSideProps({ query, params }) {
  let { db } = await connectToDatabase();
  try {
    let res = await db
      .collection("Productos")
      .findOne({ referencia: query.id.toString() });

    const posts = await res;

    posts._id = posts._id.toString();
    posts.nombre = posts.nombre.toString();

    return {
      props: { posts },
    };
  } catch (error) {
    console.log(error);
  }
}
