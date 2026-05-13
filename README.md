# 🚀 Subscription Tracker API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Arcjet](https://img.shields.io/badge/Arcjet-FF4F00?style=for-the-badge)

A modern backend API for managing recurring subscriptions. Built with **Node.js**, **Express**, and **MongoDB**, this project focuses on authentication, security, and backend architecture.

---

## 🌟 Project Introduction

The Subscription Tracker API helps users manage and track recurring subscriptions like Netflix, Spotify, gym memberships, and other services in one place.

It includes secure authentication, protected routes, automatic renewal date logic, and API protection using Arcjet.

---

## ❓ Why This Project?

This project was built to practice real-world backend development concepts like:
- REST APIs
- Authentication & Authorization
- Middleware architecture
- MongoDB relationships
- API security
- Clean backend structure

---

## ✨ Features

- Secure user sign-up and sign-in using JWT
- Password hashing using bcrypt
- Protected routes using middleware
- Create and manage subscriptions
- Automatic renewal date calculation
- Arcjet bot protection & rate limiting
- Centralized error handling
- MongoDB database integration using Mongoose

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication & Security
- JWT (JSON Web Token)
- bcryptjs
- Arcjet

### Other Tools
- dotenv
- cookie-parser
- Nodemon

---

## 🔐 Authentication & Usage

1. User creates an account
2. User signs in and receives a JWT token
3. Protected routes verify the token using middleware

> [!IMPORTANT]
> Users must create an account and authenticate first before accessing protected subscription routes.

Example:

```http
Authorization: Bearer your_jwt_token
```

---

## 🛣️ API Endpoints

### 🔑 Authentication

```http
POST /api/v1/auth/sign-up
POST /api/v1/auth/sign-in
```

### 👤 Users

```http
GET /api/v1/users
GET /api/v1/users/:id
```

### 💳 Subscriptions

```http
POST /api/v1/subscriptions
GET /api/v1/subscriptions
GET /api/v1/subscriptions/:id
```

---

## 🛡️ Security Features

- Arcjet Shield for API protection
- Bot detection & request filtering
- Rate limiting using token bucket algorithm
- JWT-based protected routes
- Password hashing using bcrypt
- Environment variable protection using `.env`

---

## 📁 Folder Structure

```text
subscription-tracker/
├── config/             # Security & app configurations
├── src/
│   ├── controllers/   # Route logic
│   ├── db/            # Database connection
│   ├── middlewares/   # Custom middleware
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
│   ├── app.js         # Express app setup
│   └── index.js       # Server entry point
└── package.json
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/notsomohit/subscription-tracker.git
cd subscription-tracker
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file:

```env
PORT=5500

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_SECRET_EXPIRY=1d

ARCJET_KEY=your_arcjet_key
```

### Run Server

```bash
npm run dev
```

---

## 📝 Sample Request

### Create Subscription

```json
{
  "name": "Netflix",
  "price": 499,
  "frequency": "monthly",
  "category": "entertainment",
  "paymentMethod": "UPI",
  "startDate": "2026-05-14"
}
```

---

## 🛠️ Currently Working On

- Completing subscription controller logic
- Adding automated email reminders
- Improving route protection
- Expanding API features

---

## 🚀 Future Improvements

- Forgot password & reset password functionality
- Delete account feature
- Complete subscription CRUD functionality
- Refresh token authentication
- Email reminder system
- Frontend dashboard UI
- Pagination & filtering
- Admin routes & role-based access
- Payment integration
- API documentation using Swagger
- Testing with Jest & Supertest
- Docker support & deployment

---

## 💡 Learning Highlights

Through this project, I learned:
- Express.js fundamentals
- REST API development
- HTTP requests & routing
- Middleware architecture
- JWT authentication & authorization
- Password hashing using bcrypt
- MongoDB & Mongoose basics
- Route protection
- Error handling in backend apps
- API security with Arcjet
- Environment variable management

---

## 👨‍💻 Author

**Mohit Singh**

GitHub: https://github.com/notsomohit

---

## 📄 License

This project is licensed under the MIT License.