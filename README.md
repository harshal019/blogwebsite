
# 🌐 Modern Blog Application (MERN Stack)

A full-featured blog web app built with the **MERN stack**. Users can create, edit, delete blogs and upload images. The app is mobile-friendly, secure, and ready for deployment on AWS.

---

## 🚀 Features

- 📝 Create, Edit, Delete Blogs
- 🖼️ Upload images using Cloudinary
- 🔐 Secure login & signup with JWT
- 🎨 Rich text editor using CKEditor
- 🌙 Dark mode support
- 📱 Mobile responsive design
- ☁️ Cloud-ready with AWS deployment
- ⚡ Toast notifications for quick messages

---

## 🛠️ Tech Stack

### Frontend
- React with Vite
- TailwindCSS
- Redux Toolkit
- CKEditor
- Firebase (optional features)

### Backend
- Node.js + Express.js
- MongoDB (with Mongoose)
- JWT (for login security)
- bcrypt (for password hashing)
- Cloudinary (image upload)
- CORS & dotenv (for security and configs)

---

## 📁 Folder Structure

```
root/
├── backend/
│   └── index.js, routes/, models/,config/ ,controllers/, middleware/
├── frontend/
│   └── src/, App.jsx, main.jsx
├── .env
```

---

## ⚙️ How to Run Locally

1. **Clone the Repo:**
   ```bash
   git clone https://github.com/harshal019/blogwebsite.git
   cd blogwebsite
   ```

2. **Install Frontend Packages:**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Packages:**
   ```bash
   cd ../backend
   npm install
   ```

4. **Setup Environment Variables:**

Create a `.env` file in `backend/`:

```
FRONTEND_URL=your_frontend_url
PORT=your_port
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

5. **Run the App:**

- Start backend:
  ```bash
  npm run dev
  ```

- Start frontend:
  ```bash
  cd ../frontend
  npm run dev
  ```

---

## ☁️ Deployment

Can be deployed on AWS using:

- EC2 (backend + frontend)
- MongoDB Atlas (database)
- Cloudinary (images)
- Docker & CodePipeline for CI/CD

---

## 🔒 Security Features

- JWT Token Authentication
- Password hashing with bcrypt
- Environment variables for secrets
- CORS protection

---

## 🔮 Future Improvements

- Comments section
- Admin dashboard
- Blog search/filter
- Social share
- Real-time notifications

---

## 🧑‍💻 Author

Made with ❤️ by Harshal Gharat

---

<!-- ## 📄 License

This project is open source and free to use under the MIT License. -->