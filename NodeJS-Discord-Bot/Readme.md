# 🤖 Discord Bot with Node.js

A simple and professional Discord bot built with **Node.js** and **discord.js**. This project demonstrates how to connect a bot with Discord, handle messages, create slash commands, and respond to user interactions.

## 🚀 Features

* 🤖 Discord bot integration using `discord.js`
* 💬 Handles incoming messages
* 🛡️ Ignores messages sent by other bots
* 🔗 Detects `create` commands and processes the provided URL
* 👋 Sends a default response to normal messages
* ⚡ Supports the `/ping` slash command
* 🏓 Responds with `Pong!!` to `/ping`
* 🔐 Uses a Discord Bot Token for authentication

## 🛠️ Technologies Used

* **Node.js**
* **JavaScript**
* **discord.js**
* **Discord Developer Portal**
* **Discord API**

## 📁 Project Structure

```text
discord_bot/
│
├── index.js          # Main bot file
├── command.js        # Registers slash commands
├── package.json      # Project configuration and dependencies
├── package-lock.json
└── node_modules/
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd discord_bot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure the Bot

Create your Discord application through the Discord Developer Portal and create a Bot user.

Add your bot token to the project:

```js
client.login("YOUR_BOT_TOKEN");
```

> ⚠️ **Security:** Never upload your bot token to GitHub or share it publicly. If a token is exposed, reset it immediately through the Discord Developer Portal.

## ▶️ Run the Bot

Start the bot using:

```bash
npm start
```

Or:

```bash
node index.js
```

If the bot connects successfully, it will be online in your Discord server.

## 💬 Message Commands

### Normal Message

When a user sends:

```text
hello
```

The bot responds:

```text
Hi From Bot
```

### Create Command

When a user sends:

```text
create https://example.com
```

The bot responds:

```text
Generating Short ID for https://example.com
```

This provides the foundation for connecting the bot with a URL-shortening system.

## ⚡ Slash Command

The project also includes a `/ping` slash command.

```text
/ping
```

Bot response:

```text
Pong!!
```

The slash command is registered using `command.js`.

Run:

```bash
node command.js
```

to register the commands with Discord.

## 🔑 Discord Intents

The bot uses the following Gateway Intents:

```js
GatewayIntentBits.Guilds
GatewayIntentBits.GuildMessages
GatewayIntentBits.MessageContent
```

These allow the bot to:

* Access Discord server information
* Receive server message events
* Read message content

The required intents must also be enabled in the **Discord Developer Portal**.

## 🧠 How It Works

The basic flow of the bot is:

```text
Discord Server
      ↓
User sends a message
      ↓
messageCreate Event
      ↓
Bot checks the message
      ↓
┌─────────────────────┐
│ create URL?         │
└──────────┬──────────┘
           ↓
Generating Short ID...
```

For slash commands:

```text
User
 ↓
/ping
 ↓
interactionCreate
 ↓
Pong!!
```

## 🎯 Learning Objectives

This project helps demonstrate:

* Discord bot development
* Event-driven programming
* Node.js modules
* Discord Gateway Intents
* Message handling
* Slash command registration
* Discord API interaction
* Basic bot authentication

## 🔮 Future Improvements

Possible future features include:

* 🔗 Generate actual shortened URLs
* 🗄️ Connect the bot with MongoDB
* 📊 Store generated URLs
* 🔍 Add URL lookup commands
* ❌ Add error handling for invalid URLs
* ⚡ Add more slash commands
* 🔐 Move secrets to environment variables
* ☁️ Deploy the bot online

## 📄 License

This project is created for **learning and educational purposes**.

---

### 👩‍💻 Author

**Hafsa Kokab**

Built with ❤️ using **Node.js + discord.js**
