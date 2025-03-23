# HỆ THỐNG LƯỚI (Grid system) 
## I. Thành phần chính
Cấu trúc của `Grid system` gồm các thành phần dưới đây. Được tổ chức theo cấu trúc lồng nhau từ ngoài vào trong 

### 1. Grid system 
Đơn vị: % 

Chứa toàn bộ thành phần của Grid system 

`margin`: Là khoảng cách 2 bên trái phái của bố cục chính của màn hình. Phần lề lớn thích hợp cho màn hình lớn, lề nhỏ thích hợp cho màn hình nhỏ
### 2. Row 
Đon vị: px 

Chứa các column của Grid system 
### 3. Column - cột 
Đơn vị: % (tương đối)

Chứa các thành phần nội dung 

VD: PC -> 12 cột, tablet: 8 cột, mobile: 4 cột 

PC / Tablet: 24px, Mobile: 16px; 
## II. Tính năng 
### 1. Đối tượng Grid 
**Class:** `grid`

Kích thước tương thích nhiều màn hình 

Tự động căn giữa đối tượng bên trong 
### 2. Đối tượng Row 
**Class:** `row`

Phân bố các column *trên một hàng* với số lượng tùy ý và tự động xuống dòng 

Không tự động căn giữa đối tượng 

***Có các class bổ sung***
#### a. Gutter 
Là khoảng cách hai phía của các column, hay chính là khoảng cách giữa các đối tượng 

**Class** `gutter`

Chỉnh sửa giá trị biến `gutter` để chỉnh khoảng cách tạo ra bởi class gutter

#### b. no-gutters 
Bỏ khoảng cách hai phía của các column 

**Class**: `no-gutters`

### 3. Column 
**Class:** `col s-n m-n l-n`
Chứa từng kích thước column, tương ứng cho kích thước có nhiều loại màn hình 
    - `s-n` (small): Màn hình nhỏ (smartphone,...) 
    - `m-n` (medium): Màn hình trung bình (tablet, Ipad,...) 
    - `l-n` (large): Màn hình to (laptop) 
*n: Số lượng cột của Grid system mà column này chiếm* 

Khi n = 0 thì column đó không hiển thị 

Công thức xác định số cột 
- Số cột = 12 / item
- Chiều rộng = (100 / 12) * số cột = 100 / item %

<u>Class hỗ trợ</u>

-`s-o-n , m-o-n, s-o-n`: Chọn vị trí column mà nội dung đó sẽ xuất hiện 
<style>
    u {
        color: red; 
        font-weight: 600; 
    }
</style>
![Grid System](/FrontEnd/Responsive/GridSystem/Grid_image.png)