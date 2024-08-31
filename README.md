Certainly! Here's the README formatted as a proper Markdown file:

# MERN Boilerplate

## Description

This is a minimal boilerplate for MERN (MongoDB, Express, React, Node.js) stack projects. It provides a solid starting point for building full-stack web applications with a RESTful API backend and a React frontend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Firebase Configuration](#firebase-configuration)
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
* [Firebase](https://firebase.google.com/) account

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

   ## Firebase Configuration

   1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).

   2. In your project settings, find the Firebase configuration object.

   3. In the frontend directory, create a file named `firebase.js` (or `firebase.ts` if using TypeScript) with the following content:

      ```javascript
      import { initializeApp } from "firebase/app";
      import { getAuth } from "firebase/auth";
      import { getFirestore } from "firebase/firestore";
      import { getStorage } from "firebase/storage";

      const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
      };

      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const db = getFirestore(app);
      const storage = getStorage(app);

      export { app, auth, db, storage };
      ```

   4. In the frontend directory, create a `.env` file and add your Firebase configuration:

      ```
      VITE_FIREBASE_API_KEY=your_api_key
      VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
      VITE_FIREBASE_PROJECT_ID=your_project_id
      VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
      VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
      VITE_FIREBASE_APP_ID=your_app_id
      ```

      Replace the values with your actual Firebase configuration.


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
  - Firebase for Google Authentication and Image storage


## Contact

- Pranav K - [pranavkcse+github@gmail.com](mailto:pranavkcse+github@gmail.com)
- Project Link: [https://github.com/Pranavk-official/mern-boilerplate](https://github.com/Pranavk-official/mern-boilerplate)
