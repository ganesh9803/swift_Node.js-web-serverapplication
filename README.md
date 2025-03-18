# Node.js Web Server Application

This is a Node.js-based REST API that allows loading users from JSONPlaceholder, managing users, and handling their associated posts and comments using MongoDB.

# Features

1.Load 10 users from JSONPlaceholder, along with their posts and comments, into MongoDB.
2.Fetch a specific user along with their posts and comments.
3.Add a new user.
4.Delete all users.
5.Delete a specific user.

# Technologies Used

Node.js
Express.js
MongoDB with Mongoose
TypeScript
dotenv for environment variables
nodemon for development
API Endpoints

# Load Users

GET /api/load

Fetches users from JSONPlaceholder and saves them to MongoDB.
Returns 200 OK on success.
Returns appropriate error code on failure.

Get a User by ID

GET /api/users/:userId
Fetches a specific user, along with their posts and comments.
Returns 404 Not Found if user does not exist.

Add a User

PUT /api/users
Adds a new user to the database.
Returns an error if the user already exists.

Delete All Users
DELETE /api/users
Deletes all users from the database.

Delete a User by ID
DELETE /api/users/:userId
Deletes a specific user from the database.
Returns 404 Not Found if user does not exist.

# Setup and Installation

Clone the repository

git clone https://github.com/ganesh9803/swift_Node.js-web-serverapplication.git
cd your-repo

# Install dependencies

npm install
Create a .env file and add the following:

PORT=5000
MONGO_URI=mongoose string

# Run the application

npm run dev  # For development (nodemon)
npm start    # For production

# Testing with Postman

Import the API endpoints into Postman.

Send requests to http://localhost:5000/api/.

Common Errors & Fixes

MongoDB Connection Error: Ensure MongoDB is running and MONGO_URI is set correctly.

Duplicate Key Error: The database might already contain users. Clear the database before reloading users.

License

This project is licensed under the MIT License.

