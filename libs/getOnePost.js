
export default async function getOnePost(){
    const res = await fetch("https://pythonjoyas.vercel.app/api/products")
    const posts = res.json()
    return posts
}