# MERN Starter Project

This repository contains a basic MERN starter split into two folders:

- `frontend`: React + Vite client
- `backend`: Express + Mongoose API server

## Quick start

### 1) Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 2) Configure environment

Copy backend env file:

```bash
cd backend
cp .env.example .env
```

Update `MONGODB_URI` if needed.

### 3) Run backend

```bash
cd backend
npm run dev
```

Backend health route: `http://localhost:5000/api/health`

### 4) Run frontend

```bash
cd frontend
npm run dev
```

Frontend dev server: `http://localhost:5173`

Optional frontend environment:

- `VITE_API_URL` (default: `http://localhost:5000`)
