# 📁 File Upload System

A simple and professional **File Upload System** built with **Node.js, Express.js, EJS, and Multer**. This project demonstrates how to receive files from an HTML form, process them using Multer, and store them on the server.

## 🚀 Features

* Upload files through an HTML form
* Handle `multipart/form-data` requests
* Store uploaded files in the `uploads` directory
* Automatically generate unique filenames using timestamps
* Display uploaded file information in the server console
* Render pages using EJS
* Simple Express.js routing

## 🛠️ Technologies Used

* **Node.js** — JavaScript runtime
* **Express.js** — Web server framework
* **Multer** — File upload middleware
* **EJS** — Template engine
* **HTML** — Upload form

## 📂 Project Structure

```text
NodeJS-File-Upload-System/
│
├── node_modules/
├── uploads/
│
├── views/
│   └── homepage.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd NodeJS-File-Upload-System
```

### 3. Install dependencies

```bash
npm install
```

If Multer or EJS are not installed:

```bash
npm install multer ejs
```

## ▶️ Run the Project

Start the server using:

```bash
npm start
```

The application will run on:

```text
http://localhost:8007
```

## 📤 How File Upload Works

The upload process follows this flow:

```text
User selects a file
        ↓
HTML form sends POST request
        ↓
POST /upload
        ↓
Multer processes the file
        ↓
File is saved in uploads/
        ↓
File information is available in req.file
        ↓
User is redirected to homepage
```

## 🔑 Important Concepts

### Multer Storage

Multer is configured to save uploaded files inside the `uploads` folder.

```js
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
});
```

### Single File Upload

```js
upload.single("profileImage")
```

This allows the server to receive one file whose form field name is `profileImage`.

### Accessing Uploaded File

```js
console.log(req.file);
```

`req.file` contains information about the uploaded file, such as its original name, filename, destination, path, size, and MIME type.

## 📌 Example Form

The HTML form should use `multipart/form-data`:

```html
<form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="profileImage">
    <button type="submit">Upload</button>
</form>
```

> The `name="profileImage"` must match `upload.single("profileImage")`.

## 🎯 Learning Objectives

This project was created to practice:

* Express.js server setup
* HTTP GET and POST routes
* Middleware
* EJS template rendering
* File upload handling
* Multer configuration
* Request and response objects
* Working with `req.body` and `req.file`
* Server-side file storage

## 🔮 Future Improvements

Possible improvements include:

* File type validation
* File size restrictions
* Multiple file uploads
* Image preview
* Uploaded file listing
* File deletion functionality
* Cloud storage integration
* Better frontend styling
* Upload progress indicator


