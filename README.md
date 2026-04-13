Tính Năng Chính
1. Quản Lý Người Dùng 
Hiển thị danh sách: Xem toàn bộ người dùng hiện có trong hệ thống thông qua giao diện bảng.
Phân quyền (Change Role): Cho phép Admin thay đổi quyền hạn của tài khoản khác (từ user lên admin và ngược lại).
Xóa tài khoản: Gỡ bỏ các tài khoản không còn hoạt động khỏi Database.

2 Hệ Thống Bảo Mật & Xác Thực
Session Management: Sử dụng express-session để duy trì trạng thái đăng nhập của người dùng xuyên suốt các trang.

Phân quyền Middleware (isAdmin):
Tự động kiểm tra quyền hạn trước khi cho phép truy cập vào các đường dẫn nhạy cảm (/admin).
Ngăn chặn người dùng bình thường truy cập trái phép vào trang quản trị.

3. Tương Tác Dữ Liệu (Database)
Mongoose Schema: Định nghĩa cấu trúc dữ liệu người dùng chặt chẽ (username, password, role).
Data Security: Sử dụng cơ chế lọc dữ liệu (Mongoose to Plain Object) để tránh lộ thông tin nhạy cảm của hệ thống ra ngoài View (Handlebars).

Công Nghệ Sử Dụng
Backend: Node.js, Express.js
Database: MongoDB (thông qua thư viện Mongoose)
Template Engine: Handlebars (HBS)
Authentication: Express-session (Quản lý phiên làm việc)

Cấu Trúc Thư Mục MVC:
/route: Chứa các định nghĩa đường dẫn (URL).

/middleware: Chứa bộ lọc bảo mật (như file authMiddleware.js).

/model: Định nghĩa cấu trúc bảng trong Database.

/controller: Xử lý logic nghiệp vụ chính của trang web.

/views: Chứa giao diện hiển thị cho người dùng.
