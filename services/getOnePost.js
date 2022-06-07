import { products } from "./products";

export default async function getOnePost(){
    const res = await fetch("https://pythonjoyas.vercel.app/api/products")
    try {
    const posts = await res.json()
    return posts
    } catch (error) {
        console.error("Error:", error);
        console.error("Response body:", res);  
    }
}