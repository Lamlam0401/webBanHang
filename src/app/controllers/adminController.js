const users = require('../model/user'); //
const { mutipleMongooseToObject } = require('../../func/ObjMongoose'); //

class adminController {
    
    index(req, res, next) {
        users.find({})
            .then(users => {
                res.render('aduser', { 
                    users: mutipleMongooseToObject(users) 
                });
            })
            .catch(next);   
    }

    destroy(req, res, next) {
        users.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/admin'))
            .catch(next);
    }

    
    changeRole(req, res, next) {
        users.updateOne({ _id: req.params.id }, { role: req.body.role })
            .then(() => res.redirect('/admin'))
            .catch(next);
    }
}

module.exports = new adminController();