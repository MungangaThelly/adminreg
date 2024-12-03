# adminreg
Applikationen ska innehålla ett REST API som hanterar CRUD-operationer kopplat till en databas/ tilllägg  en frontend som interagerar med ditt API.

Here is the file structure for the complete project, including both the backend and frontend components:

my-project/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js           # MongoDB connection
│   │   ├── controllers/
│   │   │   ├── authController.js # Handle registration & login
│   │   │   └── userController.js # Handle user CRUD operations
│   │   ├── middleware/
│   │   │   └── authMiddleware.js # JWT authentication middleware
│   │   ├── models/
│   │   │   └── User.js           # User model schema
│   │   ├── routes/
│   │   │   ├── authRoutes.js     # Routes for auth (register/login)
│   │   │   ├── protectedRoutes.js # Routes for protected data
│   │   │   └── userRoutes.js     # Routes for user CRUD operations
│   │   └── app.js                # Express app entry point
│   ├── .env                      # Environment variables (e.g., DB URI, JWT secret)
│   ├── package.json               # Backend dependencies and scripts
│   └── package-lock.json          # Lockfile for backend dependencies
│
└── frontend/
    ├── index.html                 # Frontend HTML structure
    ├── app.js                     # JavaScript logic for making API requests
    ├── styles.css                 # Optional CSS for frontend styling
    └── package.json               # Frontend dependencies (optional if using a build tool)
