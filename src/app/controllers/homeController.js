const p=require('../model/product');
const {mutipleMongooseToObject} =require('../..//func/ObjMongoose');

class homeController{
    // [GET] /home
    index(req, res){
        p.find({})
        .then(p=>{
            res.render('trangchu',{sanpham: mutipleMongooseToObject(p)})})
        .catch(err=>res.status(400).json('Error: '+err));
        
    }
}
module.exports=new homeController();