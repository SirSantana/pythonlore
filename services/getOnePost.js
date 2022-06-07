import { products } from "./products";

export default async function getOnePost(){
    const res = await fetch("https://pythonjoyas.vercel.app/api/products",
    {
        method: "GET",
        headers: {
          // update with your user-agent
          "User-Agent":'*',
          Accept: "application/json; charset=UTF-8",
        },
      })
    const posts = await res.json()
    return posts
}