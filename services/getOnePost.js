import { products } from "./products";

export default async function getOnePost(){
    const res = await fetch(`http://localhost:3000/api/products`)
    const posts = await res.json()
    return posts
}