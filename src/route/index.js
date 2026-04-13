const newsRouter = require('./news');
const homeRouter = require('./home');
const searchRouter = require('./search');
const productRouter = require('./product');
const loginRouter = require('./login');
const isAdmin = require('../authMiddleware');

const aduserRouter = require('./aduser');
function route(app) {
    app.use('/admin',isAdmin, aduserRouter);
    app.use('/login', loginRouter);
    app.use('/news', newsRouter);
    app.get('/search', searchRouter);

    app.use('/', productRouter);
    app.use('/', homeRouter);
    
}
module.exports = route;