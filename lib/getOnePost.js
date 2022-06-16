
export default async function getOnePost(){
    
   try {
    const res = await fetch("https://python-hazel.vercel.app/api/products",{
        method: `GET`,
        headers: {"Content-type": "application/json"}
    })
    const posts = await res.json()
    return posts
   } catch (error) {
       console.error(error)
   }
}