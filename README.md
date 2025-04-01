# OrderHub-express-api-
A simple and secure API for restaurants to manage orders, from customer requests to real-time status updates.


Restaurant API

This project is a RESTful API for a restaurant ordering system, built with Node.js, Express, PostgreSQL, and Prisma. The system enables two primary user roles: sellers (restaurants) and buyers (users), each with distinct capabilities for managing and tracking orders.
Features
Seller (Restaurant) Capabilities:

    Receive Orders: Sellers can receive incoming orders from users.

    Update Order Status: Sellers can update the order status through various stages:

        Order Accepted

        In Production

        Out for Delivery

Buyer (User) Capabilities:

    Place Orders: Buyers can place orders for food items from restaurants.

    Track Orders: Buyers can monitor the status of their orders in real-time.

Technologies

    API: Node.js with Express.js

    Database: PostgreSQL with Prisma ORM

    Containers: Docker

    Data Validation: Zod for schema validation

    Security: JSON Web Tokens (JWT) for user authentication and authorization

    Testing: Vitest for unit testing and Supertest for API testing
