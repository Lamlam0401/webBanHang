const express=require('express');
const router=new express.Router();
const newsController=require('../app/controllers/newsController');

router.get('/', newsController.index);

module.exports=router;