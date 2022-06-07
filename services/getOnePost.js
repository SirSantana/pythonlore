import { products } from "./products";

export default async function getOnePost(){
    const res = await fetch("https://pythonjoyas.vercel.app/api/products",
    {
        method: "GET",
        headers: {
            Accept: 'application/json, text/plain, */*',
            'User-Agent': '*',
        },
      })
    const posts = await res.json()
    return posts
}