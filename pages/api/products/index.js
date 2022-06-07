import { products } from "../../../services/products";

export default function handler(req, res){
    res.status(200).json(products)
}