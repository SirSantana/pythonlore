import getOnePost from "../../../services/getOnePost";
import { products } from "../../../services/products";


// eslint-disable-next-line import/no-anonymous-default-export
export default async(req, res)=>{
    res.status(200).json(products)
}
