# ระบบยืมคืนหนังสือ ( library-systems )
โปรเจกต์นี้เป็นระบบจัดการหนังสือ ที่ช่วยให้ผู้ใช้สามารถ ค้นหา, ยืม, คืน, เพิ่ม, แก้ไข และลบหนังสือ ได้ โดยข้อมูลหนังสือจะถูกจัดเก็บไว้ใน localStorage
## สารบัญ Table of Contents

## ฟีเจอร์หลัก Main features 

- ค้นหาหนังสือตาม รหัส หรือ ชื่อหนังสือ
- ยืม/คืนหนังสือ (สถานะ: ว่าง / มีผู้ยืมแล้ว)
- เพิ่มหนังสือใหม่
- แก้ไขข้อมูลหนังสือ
- ลบหนังสือ

## ตัวอย่างหน้าจอ Screen example
![image](https://github.com/user-attachments/assets/b6b4ad7e-7027-4f4a-97f5-32423343dcd1)

## 🛠 เทคโนโลยีที่ใช้ (Technology Stack)
🎨 Frontend
- Vue.js
ใช้สร้าง UI แบบ Reactive และโต้ตอบได้ พร้อมจัดการข้อมูลด้วย v-model, methods, และ lifecycle hook

- JavaScript (ES6+)
ใช้เขียนฟังก์ชันควบคุมการทำงานของแอปพลิเคชันฝั่งผู้ใช้

- Fetch API
สำหรับเรียกใช้ REST API จากฝั่ง Backend เพื่อโหลด/เพิ่ม/แก้ไข/ลบข้อมูลหนังสือ

- CSS (Scoped)
จัดการสไตล์แยกในแต่ละ component เพื่อความเป็นระเบียบ

- Responsive Design
รองรับการแสดงผลทั้งใน Desktop และ Mobile ผ่าน Media Queries

🔧 Backend
- Node.js
สภาพแวดล้อมรัน JavaScript ฝั่งเซิร์ฟเวอร์

- Express.js
ใช้สร้าง REST API สำหรับจัดการข้อมูลหนังสือ เช่น GET, POST, PUT, DELETE

- CORS (Cross-Origin Resource Sharing)
กำหนดให้เฉพาะ localhost เท่านั้นที่สามารถเข้าถึง API ได้ขณะพัฒนา

- In-Memory Storage
ข้อมูลหนังสือถูกเก็บไว้ในตัวแปร JavaScript (จำลองฐานข้อมูล)

- express.json() Middleware
ช่วยให้ Express อ่านข้อมูล JSON ที่ส่งมาจาก client ได้สะดวก
   
## 🚀 วิธีการติดตั้งและเริ่มต้นใช้งาน (How to Install and Get Started)

1. **Clone โปรเจกต์**
- เริ่มต้นด้วยการ clone โปรเจกต์นี้ไปยังเครื่องของคุณ
     git clone https://github.com/PKwoon23/library-systems.git

2. **ติดตั้งและรัน Frontend (Vue.js)**
cd frontend
npm install
npm run dev

- เว็บแอปจะรันที่ http://localhost:5173

3. **ติดตั้งและรัน Backend (Express.js)**
cd backend
npm install
node index.js

- เซิร์ฟเวอร์จะรันที่ http://localhost:3000

เปิดเว็บเบราว์เซอร์
เข้าไปที่ http://localhost:5173 เพื่อใช้งานระบบจัดการหนังสือ

## หมายเหตุ:
โปรเจกต์นี้ใช้ localStorage ฝั่ง Client และ In-Memory Storage ฝั่ง Server
ข้อมูลจะหายเมื่อรีสตาร์ทเซิร์ฟเวอร์หรือเคลียร์เบราว์เซอร์





