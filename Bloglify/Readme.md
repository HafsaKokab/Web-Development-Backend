# Bloglify

A full-stack blogging platform built with Node.js, Express.js, MongoDB, Mongoose, EJS, and Bootstrap.

Bloglify is a full-stack web application that enables users to register, authenticate securely, and create and manage blog content. It was developed as a practical project to gain hands-on experience with backend development, authentication, database integration, server-side rendering, file uploads, and deployment.

---

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Environment Variables](#environment-variables)
* [Running the Application](#running-the-application)
* [Project Structure](#project-structure)
* [Dependencies](#dependencies)
* [Database](#database)
* [Authentication](#authentication)
* [Image Uploads](#image-uploads)
* [User Interface](#user-interface)
* [Deployment](#deployment)
* [Security](#security)
* [Future Improvements](#future-improvements)
* [Learning Objectives](#learning-objectives)
* [Author](#author)
* [License](#license)

---

## Features

* User registration and sign-in
* JWT-based authentication
* Cookie-based session handling
* Blog creation and management
* Image upload support via Multer
* User account management
* MongoDB database integration
* Server-side rendering with EJS
* Responsive UI built with Bootstrap
* RESTful routing with Express.js
* Environment-based configuration
* Nodemon-powered development workflow

---

## Tech Stack

### Backend

| Technology           | Purpose                         |
| -------------------- | ------------------------------- |
| Node.js              | JavaScript runtime              |
| Express.js           | Web application framework       |
| MongoDB              | NoSQL database                  |
| Mongoose             | MongoDB object modeling         |
| JSON Web Token (JWT) | Authentication                  |
| Cookie Parser        | Cookie management               |
| Multer               | File and image uploads          |
| dotenv               | Environment variable management |

### Frontend

* HTML5
* CSS3
* JavaScript
* EJS
* Bootstrap

### Development Tools

* npm
* Nodemon
* Git / GitHub

---

## Getting Started

### Prerequisites

Ensure the following are installed before proceeding:

* [Node.js](https://nodejs.org/)
* MongoDB or MongoDB Atlas
* Git

### Installation

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Navigate to the project directory:

```bash
cd Bloglify
```

3. Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root with the following variables:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

| Variable      | Description                            |
| ------------- | -------------------------------------- |
| `PORT`        | Port used by the Express server        |
| `MONGODB_URI` | MongoDB database connection string     |
| `JWT_SECRET`  | Secret key used for JWT authentication |

> **Note:** Never commit your `.env` file to version control.

Ensure your `.gitignore` includes:

```text
node_modules/
.env
```

---

## Running the Application

### Development

Run the application with Nodemon:

```bash
npm run dev
```

Nodemon automatically restarts the server whenever changes are made during development.

### Production

Start the application with:

```bash
npm start
```

The application will be available at:

```text
http://localhost:8000
```

---

## Project Structure

```text
Bloglify/
│
├── models/
│   └── user.js
│
├── routes/
│   └── ...
│
├── views/
│   ├── signin.ejs
│   ├── signup.ejs
│   └── ...
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── uploads/
│   └── ...
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

> The project structure may evolve as additional features are added.

---

## Dependencies

The project uses the following main packages:

```bash
npm install express ejs mongoose jsonwebtoken cookie-parser multer dotenv
npm install nodemon -D
```

| Package         | Purpose                         |
| --------------- | ------------------------------- |
| `express`       | Backend web framework           |
| `ejs`           | Server-side templating          |
| `mongoose`      | MongoDB integration             |
| `jsonwebtoken`  | JWT authentication              |
| `cookie-parser` | Cookie handling                 |
| `multer`        | File uploads                    |
| `dotenv`        | Environment variable management |
| `nodemon`       | Development server automation   |

---

## Database

Bloglify uses **MongoDB** for data storage and **Mongoose** for schema modeling and database interaction.

The application connects to MongoDB using the `MONGODB_URI` environment variable defined in `.env`.

---

## Authentication

Bloglify implements authentication using **JSON Web Tokens (JWT)** in combination with cookies.

### Authentication Flow

1. User registers for an account.
2. User signs in with valid credentials.
3. The server verifies the submitted credentials.
4. Upon successful verification, a JWT is issued.
5. The token is stored in an HTTP cookie.
6. Protected routes validate the token before granting access.

---

## Image Uploads

File and image uploads are handled using **Multer**, allowing users to submit images through forms.

Uploaded images can be associated with blog posts and served by the application.

---

## User Interface

The frontend combines **EJS** for server-side rendering with **Bootstrap** for responsive, mobile-friendly UI components.

This provides a clean, lightweight, and responsive user experience across different screen sizes.

---

## Deployment

Bloglify is a Node.js and Express.js application and can be deployed to platforms that support Node.js web services.

### Recommended Architecture

```text
GitHub → Render → MongoDB Atlas
```

### Deployment Steps

1. Push the project to GitHub.
2. Create a new Web Service on Render.
3. Connect the GitHub repository.
4. Configure the required environment variables.
5. Set the install/build command.
6. Set the production start command.
7. Deploy the application.

**Install command:**

```bash
npm install
```

**Start command:**

```bash
npm start
```

> Nodemon is intended for development only. Use the standard Node.js start command in production.

### Production Environment Variables

```text
MONGODB_URI
JWT_SECRET
```

> Do not upload production secrets to any public repository.

---

## Security

Bloglify follows baseline security practices, including:

* Environment variables for sensitive configuration
* `.env` and `node_modules/` excluded from version control
* JWT-based authentication
* Cookie-based authentication
* Protected/authenticated routes

Never expose sensitive values such as:

```text
MONGODB_URI
JWT_SECRET
```

---

## Future Improvements

* Blog search
* Categories and tags
* Comments
* Likes
* User profiles
* Admin dashboard
* Rich text editor
* Pagination
* Notifications
* Cloud-based image storage
* Advanced validation and error handling

---

## Learning Objectives

This project provided hands-on experience with:

* Node.js backend development
* Express.js application architecture
* RESTful routing
* MongoDB and Mongoose
* JWT authentication
* Cookie-based session management
* File uploads with Multer
* Server-side rendering with EJS
* Responsive UI development with Bootstrap
* Environment variable management
* Git and GitHub workflows
* Node.js application deployment

---

## Author

**Hafsa**


## License

This project was created for learning, practice, and portfolio purposes.


