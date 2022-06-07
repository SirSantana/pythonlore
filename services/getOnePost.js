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
      const data =await res.json()
       data = JSON.parse(JSON.stringify(data))
    const posts = await data
    return posts
}