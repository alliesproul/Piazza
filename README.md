# Piazza
Piazza is a social media app where you can create an account, create posts, update posts, delete posts, and like other posts. 
To set up Piazza you can clone my repository. 
Then, install dependcies using npm install. You must also create your own .env file with the secret key. 
After installing necessary dependencies, you can start the server with npm start. 
Then, create a database through mongoDB. My database is called Posts. 

API Documentation
Register a new user:
POST /api/user/register
Request Body:
{
  "username": "string",
  "email": "string",
  "password": "string"
}

Log in: 
{
  "email": "string",
  "password": "string"
}

Create a new post:
POST /api/post
Request body: 
{
  "title": "string",
  "description": "string",
  "likes": "number"
}
Retrieve all posts:
GET /api/post
Retrieve post by ID:
GET /api/post/:postId

Update Existing Post:
PATCH /api/post/:postId
Request body: 
{
  "title": "string",
  "description": "string",
  "likes": "number"
}
Delete Existing Post:
DELETE /api/post/:postId

The header for most requests must contain the auth-toekn 
