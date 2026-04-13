const express=require('express');
const router=new express.Router();
const searchController=require('../app/controllers/searchController');


router.get('/search', searchController.index);
module.exports=router;