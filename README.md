# Contact Management System

A full-stack MERN application for managing contacts with features like adding, editing, deleting, and sorting contacts. The system uses Material-UI for the frontend interface and MongoDB for data persistence.

## Workflow

![Screenshot 2024-11-17 142246](https://github.com/user-attachments/assets/8596ff5f-92d9-4bb8-bfb2-dd8ac021b202)


## Features

- Create, Read, Update, and Delete (CRUD) contacts
- Sort contacts by any field
- Paginated contact list view
- Form validation
- Responsive design
- Delete confirmation dialog
- Toast notifications for user feedback

## Tech Stack

- Frontend: React + Vite, Material-UI
- Backend: Express.js, Node.js
- Database: MongoDB
- State Management: React Hooks
- API Communication: Axios

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Database Setup
1. Create a MongoDB database
2. Use this schema for the contacts collection:

```javascript
const contactSchema = {
  firstName: String,  // required
  lastName: String,   // required
  email: String,      // required, unique
  phoneNumber: String, // required
  company: String,     // optional
  jobTitle: String,    // optional
  timestamps: true     // adds createdAt and updatedAt
}
```

## Backend Setup

  1. Navigate to the backend directory:
     ```cd backend```

  2. Install dependencies:
     ```npm install```

  3. Create a .env file:

     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     NODE_ENV=development
     ```

  4. Start the server:
     ```npm run dev```

## Frontend Setup

  1. Navigate to the frontend directory:
     ```cd frontend```

  2. Install dependencies:
     ```npm install```

  3. Create a .env file:
     ```VITE_API_URL=http://localhost:5000/api```

  4. Start the development server:
     ```npm run dev```

  The application will be available at ```http://localhost:3000```


## Project Structure

### Frontend

  - **/src/components/** - React Components
    - **ContactForm.jsx** - Form for adding/editing contacts
    - **ContactTable.jsx** - Displays contacts with sorting and pagination
    - **DeleteConfirmDialog.jsx** - Confirmation dialog for delete action
  - **/src/services/** - API communication layer
    - **api.js** - Axios instance and API methods

### Backend

  - **/src/models/** - Database models
  - **/src/controllers/** - Business logic
  - **/src/routes/** - API routes
  - **/src/middleware/** - Custom middleware
  - **/src/config/** - Configuration files

## Technical Decisions

  - **Vite:** Chosen over Create React App for faster development experience
  - **Material-UI:** Provides consistent UI components and responsive design
  - **MongoDB:** Flexible schema and easy integration with Node.js
  - **Express.js:** Lightweight and flexible backend framework

## Challenges and Solutions

  1. **Email Uniqueness:**
     - **Challenge:** Ensuring email uniqueness while allowing updates
     - **Solution:** Implemented custom MongoDB query to exclude current contact when checking uniqueness

  2. **Form Validation:**
     - **Challenge:** Real-time validation with good UX
     - **Solution:** Combined client-side validation with server-side checks and clear error messages
    
  3. **Sort and Pagination:**
     - **Challenge:** Implementing efficient sorting with pagination
     - **Solution:** Used Material-UI's built-in components and maintained sort state in the parent component
    
  4. **Error Handling:**
     - **Challenge:** Consistent error handling across the application
     - **Solution:** Created a centralized error handler middleware and standardized error responses 
