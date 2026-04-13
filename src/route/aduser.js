const express=require('express');
const router=new express.Router();
const aduserController=require('../app/controllers/adminController');


router.get('/', aduserController.index);

router.delete('/delete/:id', aduserController.destroy);

router.post('/change-role/:id', aduserController.changeRole);

module.exports=router;