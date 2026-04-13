// middleware/authMiddleware.js
module.exports = function isAdmin(req, res, next) {
  //  if (req.session.user) {
  //      req.user = req.session.user; 
    //}

    // đã lưu thông tin user vào req.user sau khi đăng nhập
    if (req.session.user && req.session.user.role === 'admin') {
        return next(); // Nếu là Admin thì cho đi tiếp
    }
    
    // Nếu không phải Admin báo lỗi
    return res.status(403).send('Xin lỗi, bạn không có quyền thực hiện hành động này!');
};