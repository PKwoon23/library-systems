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
Vue.js
ใช้สร้าง UI แบบ Reactive และโต้ตอบได้ พร้อมจัดการข้อมูลด้วย v-model, methods, และ lifecycle hook

JavaScript (ES6+)
ใช้เขียนฟังก์ชันควบคุมการทำงานของแอปพลิเคชันฝั่งผู้ใช้

Fetch API
สำหรับเรียกใช้ REST API จากฝั่ง Backend เพื่อโหลด/เพิ่ม/แก้ไข/ลบข้อมูลหนังสือ

CSS (Scoped)
จัดการสไตล์แยกในแต่ละ component เพื่อความเป็นระเบียบ

Responsive Design
รองรับการแสดงผลทั้งใน Desktop และ Mobile ผ่าน Media Queries

🔧 Backend
Node.js
สภาพแวดล้อมรัน JavaScript ฝั่งเซิร์ฟเวอร์

Express.js
ใช้สร้าง REST API สำหรับจัดการข้อมูลหนังสือ เช่น GET, POST, PUT, DELETE

CORS (Cross-Origin Resource Sharing)
กำหนดให้เฉพาะ localhost เท่านั้นที่สามารถเข้าถึง API ได้ขณะพัฒนา

In-Memory Storage
ข้อมูลหนังสือถูกเก็บไว้ในตัวแปร JavaScript (จำลองฐานข้อมูล)

express.json() Middleware
ช่วยให้ Express อ่านข้อมูล JSON ที่ส่งมาจาก client ได้สะดวก
   
## 🚀 วิธีการติดตั้งและเริ่มต้นใช้งาน (How to Install and Get Started)

### 1️⃣ ติดตั้งและรันฝั่ง Backend (Express.js)

```bash
cd backend  # หรือโฟลเดอร์ที่เก็บ server
npm install
node index.js
📝 เซิร์ฟเวอร์จะรันที่ http://localhost:3000
💡 ใช้ Node.js 14+ ขึ้นไป

2️⃣ ติดตั้งและรันฝั่ง Frontend (Vue.js)
bash
Copy
Edit
cd frontend  # หรือโฟลเดอร์ที่เก็บโปรเจกต์ Vue
npm install
npm run dev
📝 เว็บแอปจะรันที่ http://localhost:5173 (หรือ port ที่ Vite แจ้ง)

✅ พร้อมใช้งาน
เปิดเบราว์เซอร์ไปที่ http://localhost:5173

เริ่มเพิ่ม, แก้ไข, ยืม, หรือลบหนังสือได้ทันที

💡 หมายเหตุ
โปรเจกต์นี้ใช้ In-Memory Storage (เก็บข้อมูลในหน่วยความจำชั่วคราว)
ข้อมูลจะหายเมื่อปิดหรือรีสตาร์ทเซิร์ฟเวอร์

หากต้องการเก็บข้อมูลถาวร สามารถต่อยอดเชื่อมกับฐานข้อมูลจริง เช่น MongoDB, SQLite หรือไฟล์ JSON ได้

scss
Copy
Edit

ถ้าต้องการให้ช่วยทำส่วนอื่นของ README เพิ่มเติม (เช่น รายละเอียดโปรเจกต์, เทคโนโลยีที่ใช้ ฯลฯ) บอกได้เลยนะครับ!







You said:
ใส่หมายเหตุด้วยงะ


ChatGPT said:
ได้ครับ! นี่คือเวอร์ชัน README.md แบบเต็ม พร้อม หมายเหตุ ที่ชัดเจนท้ายส่วนวิธีติดตั้ง ให้ใส่ตรงนี้ได้เลย:

markdown
Copy
Edit
## 🚀 วิธีการติดตั้งและเริ่มต้นใช้งาน (How to Install and Get Started)

### 1️⃣ ติดตั้งและรันฝั่ง Backend (Express.js)

```bash
cd backend  # หรือโฟลเดอร์ที่เก็บ server
npm install
node index.js
📝 เซิร์ฟเวอร์จะรันที่ http://localhost:3000
💡 ใช้ Node.js 14+ ขึ้นไป

2️⃣ ติดตั้งและรันฝั่ง Frontend (Vue.js)
bash
Copy
Edit
cd frontend  # หรือโฟลเดอร์ที่เก็บโปรเจกต์ Vue
npm install
npm run dev
📝 เว็บแอปจะรันที่ http://localhost:5173 (หรือ port ที่ Vite แจ้ง)

✅ พร้อมใช้งาน
เปิดเบราว์เซอร์ไปที่ http://localhost:5173

เริ่มเพิ่ม, แก้ไข, ยืม, หรือลบหนังสือได้ทันที

⚠️ หมายเหตุ (Notes)
โปรเจกต์นี้ใช้ In-Memory Storage
ข้อมูลหนังสือจะถูกเก็บไว้ในหน่วยความจำ (RAM) ของเซิร์ฟเวอร์ชั่วคราว
หมายความว่า หากรีสตาร์ทหรือปิดเซิร์ฟเวอร์ ข้อมูลทั้งหมดจะหายไป

หากต้องการเก็บข้อมูลถาวร สามารถต่อยอดเชื่อมกับฐานข้อมูลจริง เช่น MongoDB, SQLite หรือไฟล์ JSON ได้

Copy
Edit



### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
