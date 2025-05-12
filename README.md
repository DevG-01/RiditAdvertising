# RiditAdvertising

## Project Overview
**Ridit Advertising** is a web application for an advertising platform, featuring a React frontend and a Node.js/Express backend with MongoDB for data storage. The project aims to provide user authentication (registration and login) and advertising services, with a responsive UI and secure API.

## Current Progress
As of May 12, 2025, the project has reached the following milestones:

1. **Project Structure Established**:
   - Created a clear directory structure with separate `frontend` and `backend` folders.
   - Initialized Git for version control to track changes.
   - Structure:
     ```
     RiditAdvertising/
     ├── frontend/
     ├── backend/
     ├── README.md
     ```

2. **Backend Setup (Node.js/Express)**:
   - Initialized a Node.js project with core dependencies: `express`, `cors`, `mongoose`, `dotenv`, `bcryptjs`, `jsonwebtoken`.
   - Created `index.js` to set up an Express server with CORS, MongoDB connection, and a test endpoint (`GET /api/test`).
   - Configured `backend/.env` with `MONGO_URI`, `JWT_SECRET`, and `PORT`.
   - Added authentication routes in `backend/routes/auth.js` for `/api/auth/register` and `/api/auth/login`.
   - Created a `User` model in `backend/models/User.js`.
   - Resolved a 404 error for `/api/auth/register` by ensuring routes are loaded.

3. **Frontend Setup (React)**:
   - Initialized a React app with `create-react-app`.
   - Installed `axios` and `react-router-dom`.
   - Configured `frontend/.env` with `REACT_APP_API_URL=http://localhost:5000`.
   - Created `App.js` to fetch and display the backend's `/api/test` message.
   - Added `Register.js` and `Login.js` for user authentication with error handling.
   - Set up `Navbar.js` for navigation, supporting responsive design.

4. **Frontend-Backend Connectivity**:
   - Connected the frontend (`http://localhost:3000`) to the backend (`http://localhost:5000`) using `axios`.
   - Troubleshot issues like 404 errors, CORS, and environment variable misconfigurations.
   - Tested connectivity with PowerShell and browser DevTools.

5. **Testing and Debugging**:
   - Tested backend endpoints with PowerShell (`Invoke-WebRequest`).
   - Used DevTools to monitor frontend API requests.
   - Created PowerShell scripts to automate fixes and checks.
   - Addressed “Registration failed” and “Login failed” errors by improving error handling.

6. **Challenges Faced**:
   - Fixed 404 errors for `/api/auth/register` by updating routes.
   - Resolved environment variable issues (`MONGO_URI`, `JWT_SECRET`).
   - Corrected syntax errors in `Navbar.js` and `Register.js`.
   - Ensured CORS and port configurations for connectivity.

## Current State
- The app has a working foundation:
  - **Backend**: Runs on `http://localhost:5000`, connects to MongoDB, supports test and auth endpoints.
  - **Frontend**: Runs on `http://localhost:3000`, displays backend messages, includes registration and login pages.
- Ready to expand with additional features.


## How to Run
1. **Backend**:
   ```bash
   cd backend
   npm install
   node index.js
   ```
2. **Frontend**:
   ```bash
   cd frontend
   npm install
   npm start
   ```
3. **Test**:
   - Open `http://localhost:3000`.
   - Test backend: `curl http://localhost:5000/api/test`.

## Technologies Used
- **Frontend**: React, Axios, React Router
- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT, Bcrypt
- **Tools**: Git, PowerShell, MongoDB Atlas (optional)