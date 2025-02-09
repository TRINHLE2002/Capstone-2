## Yêu cầu trước khi cài đặt trên local host :

Máy tính đã cài đặt `NodeJs`

## Chạy website trên local host :

- Đổi link api trong `src/constraint/api.jsx` như sau `const API_BASE_URL = "http://localhost:3000/";`
- Cài thư viện cần thiết `npm i` và `cd api2 && npm i`
- Khởi chạy server cho api `cd api2 && node server.js`
- Khởi chạy giao diện web `npm start`
- Mở [http://localhost:3000](http://localhost:3000) để hiện thị trên browser.