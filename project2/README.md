# MongoDB + Mongoose REST API

A backend REST API built with **Node.js, Express.js, MongoDB, and Mongoose**. This project demonstrates how to connect a Node.js application with MongoDB and perform CRUD operations using a clean **Routes → Controllers → Models** structure.

## 🚀 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon
* Postman

## 📁 Project Structure

```text
project1/
│
├── controllers/
│   └── user.js
│
├── middlewares/
│   └── index.js
│
├── models/
│   └── user.js
│
├── routes/
│   └── user.js
│
├── views/
│
├── connection.js
├── index.js
├── MOCK_DATA.json
├── package.json
├── package-lock.json
└── README.md
```

## 🗄️ MongoDB Connection

The application uses Mongoose to connect to a local MongoDB database:

```js
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1");
```

Once the connection is successful, the server displays:

```text
MongoDB connected
```

## 📋 User Schema

The Mongoose User schema contains:

* `first_name`
* `last_name`
* `email`
* `job_title`
* `gender`
* `createdAt`
* `updatedAt`

The `first_name` and `email` fields are required, while the email field is unique.

## 🧩 Project Architecture

### Model

`models/user.js`

Defines the Mongoose schema and User model.

### Controller

`controllers/user.js`

Contains the logic for:

* Getting all users
* Getting a user by ID
* Creating a new user
* Updating a user
* Deleting a user

### Routes

`routes/user.js`

Defines API endpoints and connects them with controller functions.

### Middleware

Middleware processes incoming requests before they reach the route handlers.

## 🔗 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/users`     | Get all users     |
| GET    | `/api/users/:id` | Get a user by ID  |
| POST   | `/api/users`     | Create a new user |
| PATCH  | `/api/users/:id` | Update a user     |
| DELETE | `/api/users/:id` | Delete a user     |

## ➕ Create a User

Send a `POST` request to:

```text
http://localhost:8005/api/users
```

Example data:

```text
first_name: Ayesha
last_name: Rani
email: ayesha@gmail.com
gender: female
job_title: Software Developer
```

## 🧪 Testing with Postman

The API endpoints are tested using **Postman**.

Example:

```text
GET http://localhost:8005/api/users
```

For creating a user:

```text
POST http://localhost:8005/api/users
```

Send the user data using `x-www-form-urlencoded`.

## ▶️ How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. Make sure MongoDB is running

MongoDB should be running locally on:

```text
mongodb://127.0.0.1:27017
```

### 3. Start the server

```bash
npm start
```

Or with Nodemon:

```bash
npx nodemon index.js
```

The server runs on:

```text
http://localhost:8005
```

## 📚 What I Learned

* Setting up MongoDB locally
* Installing and using Mongoose
* Creating schemas and models
* Connecting Node.js with MongoDB
* Performing CRUD operations
* Building REST APIs
* Using Express middleware
* Separating routes and controllers
* Working with MongoDB Object IDs
* Testing APIs with Postman
* Structuring a backend project professionally

## 🎯 Project Goal

The main goal of this project was to understand how a **Node.js + Express backend communicates with MongoDB using Mongoose** and how a backend application can be organized using **Models, Controllers, Routes, and Middleware**.

---

**Built while learning Backend Development with Node.js, Express.js & MongoDB.** 🚀
