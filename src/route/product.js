const express = require('express');
const router = new express.Router();
const multer = require('multer');   
const path = require('path');
const productController = require('../app/controllers/productController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Lưu vào thư mục này 
        cb(null, 'src/public/img/products');
    },
    filename: (req, file, cb) => {
        // Tạo tên file duy nhất: Thời gian + Số ngẫu nhiên + Đuôi file
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// 2. Gắn Middleware 'upload.single' vào route POST
// 'image' là cái name của thẻ <input type="file"> bên file .hbs
router.post('/product/store', upload.single('image'), productController.store);
router.get('/product/:id', productController.index);
router.get('/create', productController.create);

module.exports = router;