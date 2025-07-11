# 🌐 Blog Frontend App

This is the **frontend** of a full-stack Blog Application, built with **React.js**, **Redux Toolkit**, and **React Router DOM**. It connects to the backend API for user authentication, blog post management, and comments.

---

## 🚀 Features

- 🔐 JWT-based User Authentication
- 🧑‍💻 User Dashboard (My Posts, Profile)
- 📝 Create / Delete Blog Posts (Edit is not completed due to time constraints);
- 💬 Add Comments to Posts
- 🔄 Global State Management via Redux Toolkit
- ✅ Protected Routes
- 🍃 React hooks and clean component structure

---

## 🛠️ Tech Stack

- React.js (with Hooks)
- Redux Toolkit
- React Router DOM
- Axios
- SCSS
- JWT for auth (stored in localStorage or cookies)

---


---

## 🔐 Authentication Flow

- Access token stored in `localStorage`
- Refresh token managed via HTTP-only cookie
- Protected routes handled via a `RequireUser` wrapper component

---

## 🔄 Redux Slices

- `UserSlice` → Stores logged-in user info and their posts
- `BlogListSlice` → Stores all blog posts and manages comment updates

---

## 🚧 Setup & Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/blog-frontend.git
cd blog-frontend
npm install
Edit backendUrl in AxiosClient file
npm start


