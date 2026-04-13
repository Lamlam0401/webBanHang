const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Product=new Schema({
    name:{type:String, required:true,maxlength:100},
    price:{type:Number, required:true, min:0},
    image:{type:String, required:true},
    productId: { 
        type: String, 
        default: () => 'PROD-' + Date.now() // Tự tạo mã kiểu PROD-17123456...
    },
    date:{type:Date, default:Date.now},
});
module.exports=mongoose.model('Product', Product);