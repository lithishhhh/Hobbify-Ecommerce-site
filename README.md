# Hobbify MERN App

A premium hobby marketplace converted from the original visual prototype into a full-stack MERN application.

## Stack

- React + Vite frontend
- Express + Node backend
- MongoDB with Mongoose
- JWT auth
- Context-based cart and wishlist state

## Local setup

1. Copy `backend/.env.example` to `backend/.env` and set real values if needed.
2. Start the backend:
   `cd backend && node server.js`
3. Start the frontend:
   `cd frontend && npm run dev`

If `MONGO_URI` is not set, the backend uses an in-memory MongoDB instance for development.
