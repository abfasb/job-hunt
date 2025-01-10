# Job-Hunt MERN Stack

A job hunting platform built with the **MERN** stack (MongoDB, Express, React, Node.js), designed to help users find job opportunities, apply for positions, and track their application progress.

## Features

- **User Authentication**: Users can create accounts, log in, and securely access their profile using **JWT** authentication.
- **Job Listings**: Browse job opportunities with advanced filters like job type, location, and company.
- **Job Applications**: Apply for jobs directly through the platform by submitting resumes, cover letters, and other required documents.
- **Dashboard**: Personalized dashboard to track the status of job applications and receive notifications about application updates.
- **Admin Panel**: Admins can add, update, and remove job listings, manage users, and monitor activity.

## Tech Stack

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **Redux**: For state management, especially for handling job application status and user data.
- **React Router**: Used to handle routing between pages like job listings, profile, and dashboard.
- **Material UI**: For responsive, modern UI components.
- **Axios**: For making HTTP requests to the backend API.

### Backend:
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js to handle API requests.
- **MongoDB**: NoSQL database for storing job listings, user profiles, and applications.
- **Mongoose**: MongoDB object modeling tool used for interacting with the database.

### Authentication:
- **JWT (JSON Web Token)**: For secure authentication and authorization of users.

### Other:
- **Bcryptjs**: Password hashing library for secure user authentication.
- **Dotenv**: For managing environment variables.

## Getting Started

### Prerequisites

Before getting started, make sure you have the following installed:
- **Node.js** and **npm** (Node Package Manager)
- **MongoDB** (or use MongoDB Atlas for cloud hosting)
- **Git**

### Installation

#### Clone the repository

```bash
git clone https://github.com/abfasb/job-hunt.git


