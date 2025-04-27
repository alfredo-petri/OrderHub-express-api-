# OrderHub-express-api-
A simple and secure API for managing orders, from customer requests to real-time status updates.

This project is a RESTful API for an order fulfillment system, built with Node.js, Express, PostgreSQL, and Prisma. The system supports two main user roles: sellers and buyers (users), each with distinct capabilities for managing and tracking orders.

Features
Seller Capabilities:

    Receive Orders: Sellers can receive incoming orders from users.

    Update Order Status: Sellers can update the order status through various stages:

        Order Accepted

        In Production

        Out for Delivery

Buyer (User) Capabilities:

    Place Orders: Buyers can place orders for items.

    Track Orders: Buyers can monitor the status of their orders in real-time.

Technologies

    API: Node.js with Express.js

    Database: PostgreSQL with Prisma ORM

    Containers: Docker

    Data Validation: Zod for schema validation

    Security: JSON Web Tokens (JWT) for user authentication and authorization

    Testing: Vitest for unit testing and Supertest for API testing




Notes: <br>
Adjust the DATABASE_URL if your database credentials are different. <br>
PORT is optional if you don't set, default value will be 3333
