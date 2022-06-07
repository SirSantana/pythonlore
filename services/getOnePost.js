import { products } from "./products";

export default async function getOnePost(){
    const res = await fetch("https://pythonjoyas.vercel.app/api/products")
    const posts = await res.json()
    return posts
}