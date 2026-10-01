# 🍔 BiteRush

**BiteRush** is a full-stack online food ordering application built with the **MERN stack**. Users can browse food items, add products to their cart, manage quantities, and place orders.

## 🚀 Features

* 🔐 User registration and login
* 🍔 Browse food products
* 🛒 Add items to cart
* ➕ Increase/decrease item quantity
* 🗑️ Remove items from cart
* 💰 Automatic cart total calculation
* 📦 Order management
* 👤 User authentication
* 🔑 JWT-based authentication
* 📱 Responsive user interface
* ☁️ Cloud-based image storage with Cloudinary

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* REST API

### Other Tools

* Git & GitHub
* MongoDB Atlas
* Cloudinary
* Render
* Vercel

## 📁 Project Structure

```text
BiteRush/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/kaifengineer-hub/BiteRush-Frontend
cd BiteRush
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

## 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=3000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> Never upload your `.env` file to GitHub.

## ▶️ Run Locally

### Start the backend

```bash
cd backend
npm run dev
```

### Start the frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

## 🌐 Deployment

### Frontend

The frontend is deployed using **Vercel**.

### Backend

The backend is deployed using **Render**.

### Database

The application uses **MongoDB Atlas** for the production database.

### Images

Food/product images are stored using **Cloudinary**.

## 🔄 Application Flow

```text
User
  ↓
React Frontend
  ↓
Axios / REST API
  ↓
Express + Node.js Backend
  ↓
MongoDB Atlas
  ↓
Response
  ↓
React UI
```

For images:

```text
User/Admin
    ↓
Frontend
    ↓
Backend
    ↓
Cloudinary
    ↓
Image URL
    ↓
MongoDB
```

## 🔒 Authentication

BiteRush uses **JWT authentication** to protect user-specific operations.

Passwords are securely hashed using **bcrypt** before being stored in the database.

Authentication flow:

```text
Login
  ↓
Backend verifies credentials
  ↓
JWT generated
  ↓
Token stored securely
  ↓
Authenticated requests
  ↓
Protected API routes
```

## 📌 Future Improvements

* 💳 Online payment integration
* 📍 Order tracking
* ⭐ Food reviews and ratings
* 🔔 Order notifications
* 👨‍💼 Admin dashboard
* 📊 Admin analytics
* 🔎 Advanced food search and filtering

## 👨‍💻 Developer

**Kaif Ahmad**

B.Tech Computer Science
Gurugram University

---

⭐ If you like this project, consider giving the repository a star!
