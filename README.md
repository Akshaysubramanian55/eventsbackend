#  Events API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** that allows users to create, view, update, and delete events.

---

##  Features

- Create an event
- View all events
- Get a specific event by ID
- Update an event
- Delete an event

---

##  API Endpoints

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| POST   | `/events`        | Create a new event        |
| GET    | `/events`        | Retrieve all events       |
| GET    | `/events/:id`    | Retrieve a specific event |
| PUT    | `/events/:id`    | Update an event           |
| DELETE | `/events/:id`    | Delete an event           |



##  Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)

---

## Installation & Setup

1. Clone the repository

    ```bash
           git clone https://github.com/your-username/event-api.git
           cd event
            npm install

2.Configure Environment Variables(.env)

    PORT=your_port_here
    MONGODB_URI=your_mongodb_connection_string
    MONGODB_NAME=your_database_name

3. Start the server 

       npm run dev(uses nodemon)


 packages to install via npm 
  1.dotenv
  2.express
  3.mongoose
  4.nodemon



