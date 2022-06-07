import { products } from "./products";

export default async function getOnePost(){
    const res = await fetch("https://pythonjoyas.vercel.app/api/products")
    try {
        console.error("Response body1:", res);  

    const posts = await res.json()
    console.error("Response Posts:", posts);  

    return posts
    } catch (error) {
        console.error("Error:", error);
        console.error("Response body2:", res);  
    }
}