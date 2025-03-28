# OpenAI Sandbox Middleware

## Project Description

OpenAI Sandbox Middleware is the backend part of a demonstration project designed to integrate with the OpenAI API. It acts as a middleware layer, handling API requests from the frontend and forwarding them to the OpenAI API. The middleware processes user inputs, manages API responses, and ensures secure communication.

> **Note:** This project is designed to work with the frontend available in the repository [OpenAI Sandbox Frontend](https://github.com/NoMeNoMeMe/OpenAI-sandbox-frontend).

---

## Features

- Acts as a bridge between the frontend and OpenAI API.
- Handles user queries and forwards them to OpenAI models.
- Processes and formats responses for the frontend.
- Securely manages API keys and configurations.

---

## Technologies Used

The project is built using the following technologies:

- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express**: Web framework for building RESTful APIs.
- **OpenAI Node.js Library**: Official library for interacting with the OpenAI API.
- **dotenv**: Environment variable management for secure configuration.
- **nodemon**: Development tool for automatically restarting the server on file changes.

---

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/NoMeNoMeMe/OpenAI-sandbox-backend.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd OpenAI-sandbox-backend
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Set up environment variables**:
    Create a `.env` file in the root directory and add the following variables:

    ```env
    PORT=3000
    FRONTEND_URL=http://localhost:5173
    GEMINI_API_KEY=your_gemini_api_key
    BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/
    ```

5. **Run the development server**:

    ```bash
    npm start
    ```

6. **Test the API**:
    Use a tool like Postman or cURL to send requests to the middleware at [http://localhost:3000/](http://localhost:3000/) (or another address based on your configuration).

---

## Backend Endpoints

The middleware exposes the following endpoints:

- **GET /models**: Fetches the list of available OpenAI models.
- **POST /prompt**: Sends a user query to the OpenAI API and returns the response.

---

## Deployment

To deploy the middleware to a production environment:

1. Build the project (if necessary).
2. Use a process manager like `pm2` to run the server.
3. Ensure the `.env` file is properly configured with production API keys.

---

## Frontend Integration

The middleware is designed to work with the frontend. Ensure the frontend is configured to send requests to the middleware server. You can find the frontend repository here: [OpenAI Sandbox Frontend](https://github.com/NoMeNoMeMe/OpenAI-sandbox-frontend).
