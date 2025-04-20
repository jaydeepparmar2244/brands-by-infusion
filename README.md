# Infusion Test Project

This is a full-stack application consisting of a React frontend and Node.js/Express backend with MongoDB.

## Project Structure

```
infusion-test-project/
├── infusion-test-project-fe/          # React frontend application
│   ├── src/
│   ├── public/
│   └── package.json
└── infusion-test-project-be/           # Node.js backend API
    ├── models/
    ├── routes/
    └── package.json
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/jaydeepparmar2244/brands-by-infusion.git
cd infusion-test-project
```

### 2. Frontend Setup
```bash
cd infusion-test-project-fe
npm install
```

### 3. Backend Setup
```bash
cd ../infusion-test-project-fe
npm install
```

### 4. Environment Configuration

#### Backend (.env)
Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/infusion-db
```

## Running the Application

### Start MongoDB
Make sure MongoDB is running on your system.

### Start Backend Server
```bash
cd backend
npm run dev
```
The backend server will start on `http://localhost:5000`

### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
The frontend will start on `http://localhost:5173`

## Features

### Frontend
- Modern, responsive design using Tailwind CSS
- Contact form with validation
- Pricing section with monthly/annual plans
- Smooth animations and transitions
- Mobile-first approach

### Backend
- RESTful API endpoints
- MongoDB database integration
- Form data validation
- Error handling
- CORS enabled

## API Endpoints

### Contact Form
- **POST** `/api/contact/submit`
  - Submit contact form data
  - Required fields: name, email, plan
  - Plan options: 'monthly' or 'annual'

Example request:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "plan": "monthly"
}
```

- **GET** `/api/contact`
  - Get all contact form submissions
  - Returns submissions sorted by creation date (newest first)

## Development

### Frontend Development
- The frontend is built with React and Vite
- Uses Tailwind CSS for styling
- Hot reloading enabled in development
- Production build: `npm run build`

### Backend Development
- Built with Node.js and Express
- MongoDB for data storage
- Nodemon for auto-reloading in development
- Error handling middleware

## Deployment

### Frontend
```bash
cd frontend
npm run build
```
The production build will be created in the `dist` directory.

### Backend
```bash
cd backend
npm start
```

## Contributing

To contribute to this project:
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

ISC 