// const { connectToDatabase } = require('../../../lib/dbConnect');

// export default async function handler(req, res) {
//     // switch the methods
//     switch (req.method) {
//         case 'GET': 
//              await getPost(req, res);

//         // case 'POST': {
//         //     return createProduct(req, res);
//         // }

//         // case 'PUT': {
//         //     return updatePost(req, res);
//         // }

//         // case 'DELETE': {
//         //     return deletePost(req, res);
//         // }
//     }
// }
// async function getPost(req,res){

//     try {
//         // connect to the database
//         let { db } = await connectToDatabase();
//         // fetch the posts

//         let posts = await db
//             .collection('Productos')
//             .findOne({referencia: req.query.id.toString()})
        
//         // return the posts
//         return res.json({
//             posts,
//             success: true,
//         });
//     } catch (error) {
//         // return the error
//         return res.json({
//             message: new Error(error).message,
//             success: false,
//         });
//     }
// }
// export const createProduct=async (req, res)=>{
//     try {
//         let { db } = await connectToDatabase();
//         // add the post
//         let body = await JSON.parse(req.body)
//         await db.collection('Productos').insertOne(body);
//         // return a message
//         return res.json({
//             message: 'Post added successfully',
//             success: true,
//         });
//     } catch (error) {
//         return res.json({
//             message: new Error(error).message,
//             success: false,
//         });
//     }
// }
