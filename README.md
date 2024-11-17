# Contact Management System

A full-stack MERN application for managing contacts with features like adding, editing, deleting, and sorting contacts. The system uses Material-UI for the frontend interface and MongoDB for data persistence.

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
