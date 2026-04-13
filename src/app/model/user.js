const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const user=new Schema({
    name:{type:String, required:true,maxlength:100},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, minlength:6},
    role :{type:String, required:true, enum:['user', 'admin'], default:'user'},
    date:{type:Date, default:Date.now},
});
module.exports=mongoose.model('User', user);