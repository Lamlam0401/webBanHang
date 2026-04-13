const user = require('../model/user');
const { mongooseToObject } = require('../..//func/ObjMongoose');

class loginController {

    index(req, res) {
        console.log(req.body);
        user.findOne({ email: req.body.email })
            .then(user => {
                if (!user || user.password !== req.body.password) {
                    return res.status(404).json('User not found');
                }
                // 2. LƯU VÀO SESSION 
                req.session.user = mongooseToObject(user);
                res.redirect('/');
            })
            .catch(err => res.status(400).json('Error: ' + err));

    }


    // [GET] /login
    show(req, res) {
        res.render('login');
    }
    logout(req, res) {
        // Xóa sạch thông tin trong  session
        req.session.destroy();
        // Quay về trang chủ
        res.redirect('/');
    }

}
module.exports = new loginController();