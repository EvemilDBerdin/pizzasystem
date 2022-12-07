const Products = require('../models/users');

exports.get = async (req, res, next) => {
    try{
        const [getProducts] = await Products.get();
        res.status(200).json(getProducts);
    } 
    catch (err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};
// exports.getId = async (req, res, next) => {
//     try{
//         const [getIdProducts] = await Products.getId(req.params.id);
//         res.status(200).json(getIdProducts);
//     } 
//     catch (err){
//         if(!err.statusCode){
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };
// exports.post = async (req, res, next) => {
//     try{
//         const [postProducts] = await Products.post(req.body);
//         res.status(201).json({
//             "message": "User added sucessfully."
//         });
//     } 
//     catch (err){
//         if(!err.statusCode){
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.update = async (req, res, next) => {
//     try{
//         const [updateProducts] = await Products.update(req.body);
//         res.status(200).json({
//             "message": "User updated sucessfully."
//         });
//     } 
//     catch (err){
//         if(!err.statusCode){
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.delete = async (req, res, next) => {
//     try{
//         const [deleteProducts] = await Products.delete(req.params.id);
//         res.status(200).json({
//             "message": "User deleted sucessfully."
//         });
//     } 
//     catch (err){
//         if(!err.statusCode){
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };