# OrderHub
A simple, secure and scalable API for managing customer orders — from creation to real-time status updates.

OrderHub is a RESTful API built with Node.js, Express, PostgreSQL, and Prisma ORM, following Object-Oriented Programming (OOP) principles. The system enables buyers and sellers to efficiently manage and track orders through a scalable, maintainable, and intuitive architecture.

### Features

#### Seller Capabilities
- **Receive Orders:** Sellers can receive incoming orders from users.
- **Update Order Status:** Sellers can update order statuses through stages:
  - Order Accepted
  - In Production
  - Out for Delivery

#### Buyer (User) Capabilities
- **Place Orders:** Buyers can place new orders for items.
- **Track Orders:** Buyers can monitor the real-time status of their orders.

### Tech Stack:


| **Category**         | **Technologies**                    |
|------------------|----------------------------------|
| API          | Node.js, Express.js              |
| Database     | PostgreSQL, Prisma ORM           |
| Validation   | Zod                              |
| Authentication | JSON Web Tokens (JWT)          |
| Testing      | Vitest, Supertest                |
| Containerization | Docker, Docker Compose       |



# Project Setup Guide

## 📋 Requirements
Before running this project, make sure you have installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
---

## How to Run the Project

### 1. Start the Database


```bash
docker compose up -d
```

This will spin up the PostgreSQL container required by the app.

### 2. Create a .env File

At the root of the project, create a .env file with the following content:

```
DATABASE_URL='postgresql://postgres:postgres@localhost:5432/orderhub_db'
JWT_SECRET='something_like_your_super_secret_key'
PORT=3333
```

Notes: 
- Adjust the DATABASE_URL if your database credentials are different. 
- PORT is optional if you don't set it, default value will be 3333

### 3. Install Project Dependencies

```bash
npm install
```

### 4. Apply Database Migrations

```bash
npx prisma migrate dev
```

This will apply migrations and generate the Prisma Client.

### 5. Running the Project


```bash
npm run dev
```

### 6. (Optional) Explore Your Database

You can use Prisma Studio to visualize and manage your database easily:

```bash
npx prisma studio
```

Prisma Studio will open a browser window where you can explore your tables and records.



## ❗ Troubleshooting

**Migration Issues:**

If you encounter migration errors, you can reset the database:

```bash 
npx prisma migrate reset
```

**⚠️ This will delete all existing data in the database.**


## API Endpoints Overview (Basic)

| **Endpoint** | **Description** |
| -------- | ---------- |
| /users | Create a new user |
| /sessions | Start a new user session |
| /deliveries | Deliveries control |
| /delivery-logs | Delivery logs control |

💡 Full API documentation coming soon!



## Future Improvements


**Integrate Frontend with React:** Implement a React frontend to make the project full-stack. This will involve creating an intuitive user interface where buyers can place and track orders, and sellers can manage and update order statuses.

**Real-time Order Updates:** Add WebSocket support for real-time order status updates, ensuring both buyers and sellers can see live updates on their orders.

**User Notifications:** Implement email or push notifications to inform users about the status of their orders, such as when an order is out for delivery or when there’s an issue with the order.




## License

This project is open source and available under the MIT License.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
