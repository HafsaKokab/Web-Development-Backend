# REST API with Express.js

A beginner-friendly REST API project built with **Node.js and Express.js**.
In this project, random user data was generated using **Mockaroo**, stored in a JSON file, and then used to build and test REST API endpoints with **Postman**.

---

## 📌 Project Overview

This project demonstrates how to:

* Create an Express.js server
* Work with REST API routes
* Read data from a JSON file
* Generate random/mock data using Mockaroo
* Get all users
* Get a single user by ID
* Create a new user
* Update a user
* Delete a user
* Test APIs using Postman
* Save newly created users back to the JSON file

---

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **JavaScript**
* **JSON**
* **Mockaroo** – for generating random user data
* **Postman** – for testing REST APIs

---

## 📂 Project Structure

```text
project1/
│
├── index.js
├── MOCK_DATA.json
├── package.json
├── package-lock.json
└── README.md
```

---

## 📦 Installation

Initialize the Node.js project:

```bash
npm init -y
```

Install Express:

```bash
npm install express
```

Check whether Express is installed:

```bash
npm list express
```

---

## 🎲 Mockaroo – Random Data

**Mockaroo** was used to generate random user data for testing the API.

Example fields:

```text
id
first_name
last_name
email
gender
job_title
```

The generated data was downloaded and stored in:

```text
MOCK_DATA.json
```

This JSON file contains a large number of fake users that can be used to test different API operations.

---

## 🚀 Starting the Server

Run the server using:

```bash
npm start
```

or:

```bash
node index.js
```

The server runs on:

```text
http://localhost:8002
```

---

# 🌐 API Routes

## 1. Get Users as HTML

### GET

```text
GET /users
```

URL:

```text
http://localhost:8002/users
```

This route displays the users' first names in an HTML list.

---

## 2. Get All Users

### GET

```text
GET /api/users
```

URL:

```text
http://localhost:8002/api/users
```

Returns all users in JSON format.

Example:

```json
[
  {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com"
  }
]
```

---

## 3. Get User by ID

### GET

```text
GET /api/users/:id
```

Example:

```text
http://localhost:8002/api/users/1003
```

This returns the user whose ID is `1003`.

### Important

`/api/users/1003` is used with **GET** to read the user.

```text
GET /api/users/1003
```

---

# ➕ Create a New User

### POST

```text
POST /api/users
```

URL:

```text
http://localhost:8002/api/users
```

The new user's information is sent through Postman.

Example data:

```text
first_name = maila
last_name = ahmed
email = mailaahmed@gmail.com
gender = female
job_title = software Dev
```

The server creates a new ID automatically:

```js
id: users.length + 1
```

The new user is then added to `MOCK_DATA.json`.

Example response:

```json
{
  "status": "success",
  "id": 1003
}
```

---

# ✏️ Update a User

### PATCH

```text
PATCH /api/users/:id
```

Example:

```text
http://localhost:8002/api/users/1003
```

PATCH is used to partially update an existing user.

Currently, this route returns:

```json
{
  "status": "pending"
}
```

---

# 🗑️ Delete a User

### DELETE

```text
DELETE /api/users/:id
```

Example:

```text
http://localhost:8002/api/users/1003
```

DELETE is used to delete a user.

Currently, this route returns:

```json
{
  "status": "pending"
}
```

---

# 🧪 Testing APIs with Postman

Postman was used to test all REST API endpoints.

### GET All Users

```text
GET
http://localhost:8002/api/users
```

### GET User by ID

```text
GET
http://localhost:8002/api/users/1003
```

### Create User

```text
POST
http://localhost:8002/api/users
```

For POST requests, data can be sent using:

```text
Body → x-www-form-urlencoded
```

Example:

```text
first_name    maila
last_name     ahmed
email         mailaahmed@gmail.com
gender        female
job_title     software Dev
```

### PATCH User

```text
PATCH
http://localhost:8002/api/users/1003
```

### DELETE User

```text
DELETE
http://localhost:8002/api/users/1003
```

---

# 🔄 REST API Summary

| Method | Endpoint         | Purpose               |
| ------ | ---------------- | --------------------- |
| GET    | `/users`         | Display users as HTML |
| GET    | `/api/users`     | Get all users as JSON |
| GET    | `/api/users/:id` | Get one user          |
| POST   | `/api/users`     | Create a new user     |
| PATCH  | `/api/users/:id` | Update a user         |
| DELETE | `/api/users/:id` | Delete a user         |

---

# 🧩 Express Middleware

The project uses Express middleware to read form data:

```js
app.use(express.urlencoded({ extended: false }));
```

This allows Express to access data sent through Postman's `x-www-form-urlencoded` body using:

```js
req.body
```

For example:

```js
const body = req.body;
```

---

# 📁 Working with JSON File

The project uses Node.js `fs` module to save newly created users:

```js
const fs = require("fs");
```

After adding a new user, the updated data is written back to:

```text
MOCK_DATA.json
```

using:

```js
fs.writeFile()
```

---

# 🧠 Key Concepts Learned

Through this project, I practiced:

* Node.js HTTP server basics
* Express.js
* Routes
* Route parameters
* `req.params`
* `req.body`
* Middleware
* REST API
* HTTP methods
* JSON responses
* CRUD operations
* File System (`fs`)
* Reading and writing JSON data
* Mock data generation with Mockaroo
* API testing with Postman

---

## 🔥 REST API Flow

```text
Mockaroo
    ↓
Generate Random User Data
    ↓
MOCK_DATA.json
    ↓
Express.js Server
    ↓
REST API
    ↓
Postman
    ↓
Test GET / POST / PATCH / DELETE
```

---

## 👩‍💻 Learning Project

This project was created as part of my **Node.js and Backend Development learning journey**, focusing on understanding how REST APIs work with Express.js and how APIs are tested using Postman.
