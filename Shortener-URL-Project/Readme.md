# 🔗 URL Shortener Service

A simple and efficient URL Shortener built with **Node.js**, **Express**, and **MongoDB**. This service allows users to convert long URLs into short, shareable links, redirects users to the original URL, and tracks analytics (total clicks and visit history) for every shortened URL.

---

## 📌 Features

- Generate short URLs from valid long URLs
- Redirect short URLs to their original destination
- Track total clicks/visits per short URL
- View detailed analytics including visit timestamps
- Lightweight and fast, powered by Express and MongoDB
- Server-side rendering support with EJS

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework / routing |
| MongoDB | Database for storing URLs and analytics |
| Mongoose | MongoDB object modeling (ODM) |
| shortid | Generating unique short IDs |
| EJS | Server-side rendering (views/templates) |
| nodemon | Auto-restarting server during development |

---

## ⚙️ Installation

Clone the repository and install the dependencies:

```bash
git clone <your-repo-url>
cd url-shortener
npm init -y
npm i express
npm i mongoose
npm i shortid
npm i ejs
npm i nodemon
```

### Run the server

```bash
nodemon index.js
```

The server will start on:

```
http://localhost:8006
```

---

## 📡 API Routes

### 1. Create Short URL

**Endpoint:** `POST /url`

**Description:** Accepts a valid URL and returns a newly generated short URL.

**Request Body:**
```json
{
  "originalUrl": "https://github.com/HafsaKokab"
}
```

**Response:**
```json
{
  "shortUrl": "http://localhost:8006/ErJphdmKP"
}
```

---

### 2. Redirect to Original URL

**Endpoint:** `GET /:id`

**Description:** Redirects the user from the short URL to the original (long) URL and logs a new visit for analytics.

**Example:**
```
GET http://localhost:8006/ErJphdmKP
→ Redirects to https://github.com/HafsaKokab
```

---

### 3. Get URL Analytics

**Endpoint:** `GET /url/analytics/:id`

**Description:** Returns analytics data for a given short URL, including total clicks and a full visit history with timestamps.

**Example Request:**
```
GET http://localhost:8006/url/analytics/ErJphdmKP
```

**Example Response:**
```json
{
  "totalClicks": 5,
  "analytics": [
    { "timestamp": "2026-08-18T10:12:45.000Z" },
    { "timestamp": "2026-08-19T14:03:21.000Z" },
    { "timestamp": "2026-08-20T09:45:10.000Z" }
  ]
}
```

- **totalClicks** → Total number of times the short URL has been visited
- **analytics** → An array containing the timestamp of every individual visit

---

## 🔍 Example Short URLs

| Original URL | Short URL |
|--------------|-----------|
| `https://www.google.com` | `http://localhost:8006/fLfoBfeX6` |
| `https://github.com/HafsaKokab` | `http://localhost:8006/ErJphdmKP` |

---

## 📁 Project Structure

```
url-shortener/
├── models/
│   └── url.js
├── routes/
│   └── url.js
├── views/            # EJS templates (server-side rendering)
├── index.js
├── package.json
└── README.md
```

---

## ⚡ How It Works

1. A user submits a long/original URL via `POST /url`.
2. The server generates a unique short ID using `shortid` and saves it to MongoDB along with the original URL.
3. When a user visits the short URL (`GET /:id`), the server looks up the original URL, logs the visit (timestamp), increments the click count, and redirects the user.
4. Analytics for any short URL can be retrieved via `GET /url/analytics/:id`, showing total clicks and full visit history.

---

## 🚀 Future Improvements

- Add custom alias support for short URLs
- Add URL expiration functionality
- Add user authentication to manage personal URLs
- Add a frontend dashboard for analytics visualization

---

## 👩‍💻 Author

**Hafsa Kokab**
GitHub: [https://github.com/HafsaKokab](https://github.com/HafsaKokab)

---

## 📄 License

This project is licensed under the **MIT License**.
