Certainly! Here's the README formatted as a proper Markdown file:

# MERN Boilerplate

## Description

This is a minimal boilerplate for MERN (MongoDB, Express, React, Node.js) stack projects. It provides a solid starting point for building full-stack web applications with a RESTful API backend and a React frontend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Contact](#contact)

## Prerequisites

Before you begin, ensure you have met the following requirements:

* [Node.js](https://nodejs.org/) (v14 or later)
* [npm](https://www.npmjs.com/) (usually comes with Node.js)
* [MongoDB](https://www.mongodb.com/) (local installation or Atlas account)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Pranavk-official/mern-boilerplate.git
   cd mern-boilerplate
   ```

2. Install backend dependencies:
   ```
   npm run backend-install
   ```

3. Install frontend dependencies:
   ```
   npm run frontend-install
   ```

## Environment Setup

1. In the root directory, create a `.env` file:
   ```
   touch .env
   ```

2. Open the `.env` file and add the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
   Replace `your_mongodb_connection_string` with your actual MongoDB connection string and `your_jwt_secret` with a secure random string for JWT encryption.

## Running the Application

1. Start the backend server:
   ```
   npm run server
   ```

2. In a new terminal, start the frontend development server:
   ```
   npm run client
   ```

3. To run both frontend and backend concurrently:
   ```
   npm run dev
   ```

The backend server will run on http://localhost:3000 or on the `PORT` given in the root .env, and the frontend development server will run on http://localhost:5173.

## Project Structure

```
mern-boilerplate/
├── backend/
│   ├── app.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Available Scripts

In the project directory, you can run:

- `npm run backend-install`: Installs backend dependencies
- `npm run frontend-install`: Installs frontend dependencies
- `npm run server`: Starts the backend server
- `npm run client`: Starts the frontend development server
- `npm run dev`: Runs both backend and frontend concurrently

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JSON Web Token (JWT) for authentication
  - bcrypt for password hashing

- **Frontend**:
  - React (with Vite as build tool)
  - React Router for navigation
  - Axios for API requests


## Contact

- Pranav K - [pranavkcse+github@gmail.com](mailto:pranavkcse+github@gmail.com)
- Project Link: [https://github.com/Pranavk-official/mern-boilerplate](https://github.com/Pranavk-official/mern-boilerplate)
