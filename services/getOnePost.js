
export default async function getOnePost1(){
    const res = await fetch("http://localhost:3000/api/products")
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