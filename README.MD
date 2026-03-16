# AI-Powered MERN Blog

A full-stack blog platform built with MongoDB, Express, React, and Node.js. It features an integrated AI writing assistant to help creators scale their content instantly, alongside a secure admin dashboard and a fast, responsive public reading interface.

## 🚀 Features

### Admin Dashboard (The Engine)
* **AI Content Generation:** Overcome writer's block and scale your blog rapidly by generating full drafts via AI.
* **Content Management:** Full CRUD (Create, Read, Update, Delete) controls for all posts.
* **Media Storage:** Seamlessly upload and manage cover images via ImageKit.
* **Community Moderation:** Review, approve, or delete reader comments before they go live.
* **Auth:** Secure, JWT-protected admin login system.

### Public Site (The Experience)
* **Clean UI:** Fast, responsive, and modern design built entirely with Tailwind CSS.
* **Reader Engagement:** Browse the feed, read posts, and submit comments (held for admin review to prevent spam).

## 🛠️ Tech Stack

* **Frontend:** React, React Router, Tailwind CSS, Axios
* **Backend:** Node.js, Express.js, Mongoose
* **Database & Storage:** MongoDB, ImageKit
* **Integrations:** AI API for content generation
* **Deployment:** Vercel

## 📂 Project Structure

* `/frontend` - React UI, routing, and state management.
* `/backend` - Express server, REST API, Mongoose models, and auth middleware.

## 💻 Local Setup

**1. Clone the repository:**
```bash
git clone [https://github.com/yourusername/your-repo-name.git](https://github.com/yourusername/your-repo-name.git)
cd your-repo-name
```

**2. Backend Setup:**
Open a terminal and navigate to the backend folder:
```bash
cd backend
npm install
```
Create a `.env` file in the `/backend` directory:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url
AI_API_KEY=your_ai_api_key
```
Start the backend server:
```bash
npm run dev
```

**3. Frontend Setup:**
Open a new terminal and navigate to the frontend folder:
```bash
cd frontend
npm install
```
Create a `.env` file in the `/frontend` directory:
```env
VITE_BASE_URL=http://localhost:4000
```
Start the React development server:
```bash
npm run dev
```

## 👨‍💻 Author
**Tanzim**
* Portfolio project demonstrating full-stack development, REST API design, and modern frontend architecture.