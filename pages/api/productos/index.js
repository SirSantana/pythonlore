import DBConnect from "../../../libs/dbConnect";

DBConnect()

export default async function handler (req, res){
    switch (req.method) {
        case 'GET':
            await getProducts()

            break;
    
        default:
            break;
    }
}

export const getProducts=()=>{
    try {
        
    } catch (error) {
        
    }
}