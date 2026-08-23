# 🔐 Authentication & Authorization — Notes

A concise reference on authentication patterns, JWT, and session-based auth in Express.js applications.

---

## 1. Authentication vs Authorization

| Term | Meaning |
|------|---------|
| **Authentication** | Verifies *who* the user is (e.g., login with email and password) |
| **Authorization** | Determines *what* the authenticated user is allowed to access or do |

---

## 2. Stateful Authentication (Session-based)

Stateful authentication means the **server maintains the user's session/state**.

### Flow

```
Login → Server creates Session → Session ID → Cookie → Future Requests
```

- User sends username and password.
- Server creates a session.
- Server sends a Session ID (UID) to the client.
- Client stores the Session ID, usually in a cookie.
- The cookie is sent with future requests.
- Server uses the Session ID to identify the user.

**Key characteristic:** The server "remembers" the user via stored session data.

---

## 3. Stateless Authentication (JWT-based)

Stateless authentication means the **server does not maintain session state**.

A common example is **JWT (JSON Web Token)**.

### Flow

```
Login → Token Generated → Client Stores Token → Token Sent with Requests
```

- User logs in.
- Server generates a token.
- Client stores the token.
- Token is sent with every request.
- Server verifies the token to authenticate the user.

**Key characteristic:** The server doesn't store anything — the token itself carries proof of authentication.

---

## 4. How Is the UID Transferred?

The Session UID (or token) can be transferred between the client and server via:

- Cookies
- Headers
- Response body

> Cookies are the most common method used in session-based authentication.

---

## 5. Express.js Authentication Flow

In Express.js, authentication is commonly handled using **middleware**.

```
Client
   ↓
Auth Middleware
   ↓
Check Cookie / UID / Token
   ↓
Valid?
  ├── Yes → next() → Endpoint Route
  └── No  → Reject Request
```

**Useful packages:**
```bash
npm i uuid
npm i cookie-parser
```

---

## 6. JWT Authentication — Deep Dive

### 6.1 What is JWT?

**JWT (JSON Web Token)** is used for authentication. It allows the server to identify a logged-in user **without storing a session on the server**.

### 6.2 Secret Key 🔑

The **secret key** is a private key kept on the server. It is used to **sign** and **verify** JWT tokens.

```js
const secret = "Piyush$123@$";
```

> **Secret Key = Server's private key**

### 6.3 Token 🎟️

After a successful login, the server creates a JWT token:

```js
const token = setUser(user);
```

The token is usually stored in a **cookie** and sent with future requests.

> **Token = Proof that the user is authenticated**

### 6.4 Signing a Token

```js
jwt.sign(user, secret);
```

The server uses the **secret key** to create/sign the JWT token.

### 6.5 Verifying a Token

```js
jwt.verify(token, secret);
```

The server checks whether the token is valid using the same secret key.

---

## 7. Stateful vs Stateless — Comparison

| | **Stateful (Session)** | **Stateless (JWT)** |
|---|---|---|
| Server stores session? | ✅ Yes | ❌ No |
| Server "remembers" user? | ✅ Yes | ❌ No |
| Identifier used | Session ID | JWT Token |
| Verification method | Lookup on server | Cryptographic verification with secret key |

---

## 8. Easy Memory Trick 🧠

- 🔵 **JWT → Stateless**
- 🟢 **Session → Stateful**

> **Secret Key 🔑 → creates & verifies Token 🎟️ → Token proves authentication.**
