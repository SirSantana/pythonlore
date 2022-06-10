const { connectToDatabase } = require('../../../lib/dbConnect');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        // case 'GET': {
        //     return getPosts(req, res);
        // }

        case 'POST': {
            return createProduct(req, res);
        }

        // case 'PUT': {
        //     return updatePost(req, res);
        // }

        // case 'DELETE': {
        //     return deletePost(req, res);
        // }
    }
}
export const createProduct=async (req, res)=>{
    try {
        let { db } = await connectToDatabase();
        // add the post
        let body = await JSON.parse(req.body)
        await db.collection('Productos').insertOne(body);
        // return a message
        return res.json({
            message: 'Post added successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
// async function getPosts(req,res){
//     try {
//         // connect to the database
//         let { db } = await connectToDatabase();
//         // fetch the posts
//         let posts = await db
//             .collection('Productos')
//             .find({})
//             .sort({ published: -1 })
//             .toArray()
//         // return the posts
//         return res.json({
//             message: JSON.parse(JSON.stringify(posts)),
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