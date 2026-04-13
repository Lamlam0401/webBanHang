const products=require('../model/product');
const {mutipleMongooseToObject} =require('../../func/ObjMongoose');

class searchController{
    // [GET] /home
    index(req, res){
        products.find({name: {$regex: req.query.q, $options: 'i'}})
        .then(products=>{
            console.log('Số sản phẩm tìm thấy:', products.length);
            res.render('home',{products: mutipleMongooseToObject(products)})})
        .catch(err=>res.status(400).json('Error: '+err));
        
    }
}
module.exports=new searchController();