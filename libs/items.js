import getOnePost from "../services/getOnePost";

export async function getPathsIds() {
  const posts = await getOnePost();
  const ids = posts.map(el=>{
    return{
      params:{
        id:convertToPath(el.nombre)
      }
    }
  })

  return ids
}

export async function getItemData(id) {
  const items = await getOnePost();
  const product = items.find((item) => convertToPath(item.nombre) === id);
  return {
    id,
    data: product,
  };
}

export function convertToPath(nombre) {
  return nombre.toLowerCase().replace(/\s/g, "-");
}
