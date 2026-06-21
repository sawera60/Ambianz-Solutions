# 🌟 Ambianz Solutions

A premium, full-stack MERN e-commerce and interactive portfolio web application for **Ambianz Solutions**, a leading custom interior design and renovation fitout specialist. The platform showcases high-end residential and commercial fitout services, lists premium products for sale, manages user accounts, handles quote requests, and provides an administrative interface for business management.

---

## 📖 Table of Contents
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [1. Clone and Install Dependencies](#1-clone-and-install-dependencies)
  - [2. Environment Configuration](#2-environment-configuration)
  - [3. Running the Application](#3-running-the-application)
- [🔌 API Endpoints](#-api-endpoints)
- [🛡️ Security Features](#️-security-features)
- [📦 Deployment](#-deployment)

---

## ✨ Key Features

### 🏡 Client-Facing Experience
* **Premium Portfolios & Interactive Services**: Custom, rich showcase pages for high-end services:
  * 🍳 Custom Kitchens
  * 📺 Media Walls & Entertainment Hubs
  * 👗 Custom Wardrobes & Walk-ins
  * 🚪 Architectural Doors
  * ☕ Commercial Cafe Fitouts
* **E-Commerce Shop**: Clean, modern catalog to browse, search, and buy products.
* **Favorites (Wishlist)**: Client side/session-backed favorites tracking to save products.
* **Cart System**: High-performance cart management that calculates totals dynamically.
* **Interactive Quote Builder**: Easy-to-use consultation/quote request forms linked directly to the backend and email notifications.
* **Instant WhatsApp Integration**: Direct floating button for instant client-to-business chat.

### 👑 Admin Management Dashboard
* **Product Catalog Controls**: Comprehensive CRUD (Create, Read, Update, Delete) operations for the shop inventory.
* **Real-time Order Tracking**: Monitor customer transactions, order details, and buyer profiles.
* **Quote Request Pipeline**: Centralized access to view, filter, and respond to incoming project consultation requests.
* **User Management**: Control user roles (Admin vs. Customer) securely.

---

## 🛠️ Tech Stack

### Frontend
* **Core**: `React 19` & `Vite` (Next-gen bundling)
* **Styling**: `Tailwind CSS v4` (Modern CSS-in-JS & utility classes)
* **Animations**: `Framer Motion` (Smooth micro-interactions and transitions)
* **Icons**: `Lucide React` & `React Icons`
* **Routing**: `React Router DOM v7`
* **Media slider**: `Swiper`
* **Alerts**: `React Toastify`

### Backend
* **Runtime**: `Node.js`
* **Framework**: `Express.js (v5)`
* **Database**: `MongoDB` via `Mongoose`
* **Authentication**: `JSON Web Tokens (JWT)` & `Cookie-Parser` for secure, HTTP-only cookie storage
* **File Uploads**: `Multer` for processing product images
* **Notifications**: `Nodemailer` & `Firebase Admin SDK`

---

## 📁 Project Structure

```
ambianz-solutions/
├── backend/
│   ├── config/             # Database & global configurations
│   ├── controllers/        # Business logic handlers for routes
│   ├── middlewares/        # JWT validation, rate limiters, role verification
│   ├── models/             # Mongoose schemas (User, Product, Order, QuoteRequest)
│   ├── routes/             # Express API endpoints
│   ├── uploads/            # Local product image store (if not using cloud storage)
│   ├── index.js            # Express server entrypoint
│   └── vercel.json         # Vercel deployment config for backend
├── frontend/
│   └── ambianz-solutions/
│       ├── public/         # Static assets
│       ├── src/
│       │   ├── components/ # Shared components (Navbar, Cart, QuoteModal, etc.)
│       │   ├── context/    # Context API providers (Auth, Cart, Favorites, Quote)
│       │   ├── pages/      # Route pages (Home, Shop, Services, Projects, Admin)
│       │   ├── App.jsx     # Route definitions and wrapper providers
│       │   └── main.jsx    # Client bundle entrypoint
│       └── vite.config.js  # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v18 or higher recommended)
* **MongoDB** (Local instance or MongoDB Atlas cluster URI)

### 1. Clone and Install Dependencies

First, navigate to the repository directory:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend/ambianz-solutions
npm install
```

### 2. Environment Configuration

Create a `.env` file in the **backend** directory:

```env
PORT=5000
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/ambianz
JWT_SECRET=your_jwt_secret_key_here
FRONTEND_URL=http://localhost:5173
# Optional Mail configuration (for Quote requests)
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

Create a `.env` file in the **frontend/ambianz-solutions** directory:

```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Running the Application

To run the application in development mode:

#### Start Backend
```bash
cd backend
npm run dev
```

#### Start Frontend
```bash
cd frontend/ambianz-solutions
npm run dev
```

The frontend will start running on [http://localhost:5173](http://localhost:5173) and the backend on [http://localhost:5000](http://localhost:5000).

---

## 🔌 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| **POST** | `/api/auth/signup` | Register a new user | No |
| **POST** | `/api/auth/signin` | Authenticate user & set token | No |
| **POST** | `/api/auth/logout` | Clear auth cookies | Yes |
| **GET** | `/api/product` | Fetch all products | No |
| **POST** | `/api/product` | Add a new product | Yes (Admin) |
| **PUT** | `/api/product/:id` | Edit an existing product | Yes (Admin) |
| **DELETE** | `/api/product/:id` | Remove a product | Yes (Admin) |
| **POST** | `/api/quotes` | Submit a request for a quote | No |
| **GET** | `/api/quotes` | View all quote requests | Yes (Admin) |
| **POST** | `/api/order` | Place a new order | Yes |
| **GET** | `/api/order` | Fetch order history | Yes (Admin) |

---

## 🛡️ Security Features

1. **Helmet**: Configures HTTP headers to protect against web vulnerabilities.
2. **Express Rate Limit**: Restricts repeated requests to public endpoints (e.g. login is limited to 20 requests per 15 minutes, general API requests to 300 per 15 minutes).
3. **HTTP-only Cookies**: Secures JWT storage from cross-site scripting (XSS) attacks.
4. **CORS (Cross-Origin Resource Sharing)**: Restricts API access exclusively to trusted origins and Vercel deployments.
5. **Data Validation**: Enforces database integrity using schema validations.

---

## 📦 Deployment

The application is pre-configured for simple deployment on **Vercel** or **Render/Heroku**:
* Frontend config: [vercel.json](file:///d:/Ambianz%20Solutions%20Website/Ambianz-Solutions/frontend/ambianz-solutions/vercel.json)
* Backend config: [vercel.json](file:///d:/Ambianz%20Solutions%20Website/Ambianz-Solutions/backend/vercel.json)
