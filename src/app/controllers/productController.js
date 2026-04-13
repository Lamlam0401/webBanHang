const products = require('../model/product');
const { mongooseToObject } = require('../../func/ObjMongoose');
const multer = require('multer');// Thư viện để xử lý file upload
const path = require('path');
class productController {
    // [GET] /product/:id
    index(req, res) {
        products.findOne({ productId: req.params.id })
            .then(products => {
                res.render('product', { products: mongooseToObject(products) })
            })
            .catch(err => res.status(400).json('Error: ' + err));

    }

    create(req, res,) {
        res.render('newsPD');
    }

    // [POST] /product/store
    store(req, res, next) {
        // req.body chứa các chữ (name, price, description)
        const formData = req.body;

        // Nếu người dùng có chọn ảnh, Multer sẽ tạo ra đối tượng req.file
        if (req.file) {
            // Chúng ta lưu ĐƯỜNG DẪN ảnh vào database
            formData.image = `/img/products/${req.file.filename}`;
        }

        // Tạo đối tượng sản phẩm mới từ formData đã có đường dẫn ảnh
        const product = new products(formData);

        product.save()
            .then(() => res.redirect('/')) // Lưu xong phi về trang chủ
            .catch(next);
    }

}

module.exports = new productController();