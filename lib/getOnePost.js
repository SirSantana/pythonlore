
export default async function getOnePost(){
    const res = await fetch("https://pythonjoyas.vercel.app/api/products",{
        method: `GET`,
        headers: {
            Accept: "application/json"
        }
    })
   try {
    const posts = res.json()
    return posts
   } catch (error) {
       console.error(error)
   }
}