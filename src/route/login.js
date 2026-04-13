const express=require('express');
const router=new express.Router();
const loginController=require('../app/controllers/loginController');


router.post('/', loginController.index);
router.get('/', loginController.show);
router.get('/logout', loginController.logout);
module.exports=router;