# CouponXchange - Full Stack Project

**CouponXchange** is a full-stack web application that allows users to browse, buy, and sell discount coupons. Built with a modern tech stack: **React + Tailwind CSS** on the frontend and **Spring Boot + Oracle Database** on the backend.

---

## 📦 Tech Stack

### Frontend
- React.js (with Vite)
- Tailwind CSS
- Lucide Icons

### Backend
- Spring Boot (Java 17)
- Spring Data JPA
- Oracle Database
- RESTful API

---

## 🚀 Features
- 🛍️ Browse verified coupons by category (Food, Fashion, etc.)
- 🔍 Filter coupons with live search
- 📤 Sell your own coupons through a dynamic form
- 📜 View your order history
- 🔄 Realtime integration between frontend and backend

---

## 🧰 Project Structure
```
couponxchange-full-oracle/
├── couponxchange-frontend/     # React + Tailwind app (Vite)
├── couponxchange-backend-oracle/ # Spring Boot backend with Oracle DB
```

---

## 🖥️ How to Run

### 1. Backend (Spring Boot + Oracle)
```bash
cd couponxchange-backend-oracle
mvn spring-boot:run
```
Make sure your Oracle DB is running and configured correctly in `application.properties`.

### 2. Frontend (React + Vite)
```bash
cd couponxchange-frontend
npm install
npm run dev
```
Then open: [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Database Setup (Oracle)
Make sure Oracle DB is installed and running.
Create the schema:
```sql
CREATE DATABASE couponxchange;
```

Use correct DB credentials in:
```
couponxchange-backend-oracle/src/main/resources/application.properties
```

---

## 🧹 .gitignore (auto-created)
```gitignore
# Node
node_modules/
dist/

# Maven
/target/

# System
.DS_Store
Thumbs.db

# IDE
.idea/
.vscode/
*.iml

# Logs
*.log

# Env
.env
```

---

## 📄 License
This project is for educational/demo purposes only.

---

## 🙌 Author
**Soubhagya Ranjan Hati**

GitHub: [github.com/Soubhagya001](https://github.com/Soubhagya001)

---

Let me know if you'd like to deploy this project or connect it to GitHub Pages / Render / Railway!
