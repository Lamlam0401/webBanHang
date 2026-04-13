//khơi tạo thưu viện
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true })); //  dữ liệu từ Form
app.use(express.json()); //  đọc dữ liệu dạng JSON
//template engine
const handlebars = require('express-handlebars');
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
        // Tạo helper để so sánh bằng
        equals: (a, b) => a === b,
        sum: (a, b) => a + b,
    }
}
));//mỗi khi có đuôi này thì chạy
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//sass
app.use(express.static(path.join(__dirname, 'public')));
//import mongoose-kết nối mongo
const db = require('./config/db');
db.connect();
//session
const session = require('express-session');

app.use(session({
  secret: 'randomkey', // Chuỗi bất kỳ để mã hóa session
  resave: false,               // Thêm dòng này: Không lưu lại nếu không đổi
  saveUninitialized: false,    // Thêm dòng này: Không tạo session trống
  cookie: { secure: false } //chạy trên http hay k
}));
app.use((req, res, next) => {
  // Gán dữ liệu session vào biến local của Handlebars
  res.locals.user = req.session.user;
  next();
});
//route
const route = require('./route/index');
route(app);

app.listen(3000, () => {
  console.log('Server đang chạy tại http://localhost:3000');
});