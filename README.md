# Basic Post Management API

This project is a basic Node.js server that implements a RESTful API for managing posts. It allows you to create, retrieve, and delete posts. The server is built using the Express framework and uses the crypto module to generate unique post IDs.

## Prerequisites

To run this project, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org): JavaScript runtime environment

## Installation

1. Clone the repository or download the code.

   ```shell
   git clone https://github.com/your-username/basic-post-management-api.git

Open a terminal and navigate to the project directory.

Install the dependencies.

```npm install```

## Usage
To start the server, run the following command in the project directory:

```node index.js```

The server will start running on http://localhost:8080.

# API Endpoints
The following API endpoints are available:

## GET /posts
Retrieves all the posts.

## POST /posts
Creates a new post.

Request Body:

```
{
  "name": "Post Title",
  "author": "Author Name",
  "content": "Post Content"
}
```

## GET /posts/:id
Retrieves a specific post by ID.

## DELETE /posts/:id
Deletes a specific post by ID.

