ERP Management System

A full-stack ERP application built with the PERN stack (PostgreSQL,
Express.js, React.js, and Node.js). The project models a business
workflow from customer enquiry to quotation, sales order, inventory
reservation, and dispatch.

Note: Update the setup commands, environment variable names, API
routes, and feature list below to match the implementation in this
repository before submitting it.

Features

Authentication and authorization --- JWT-based authentication,
protected routes, and role-based access for Admin and Sales User
roles.

Customer enquiries --- Create and manage customer enquiries
containing one or more products.

Product and inventory management --- Maintain product details
and physical/reserved stock quantities.

Quotations --- Create quotations with item quantities, unit
prices, discounts, GST, and totals.

Sales orders --- Convert eligible accepted quotations into sales
orders.

Inventory reservation --- Check available stock and prevent
reservations beyond available inventory.

Dispatch management --- Record dispatch details and update
inventory quantities.

REST API --- Backend endpoints for application workflows.

Validation and error handling --- Validate requests and handle
expected application errors.

Technology Stack

Frontend

React.js

JavaScript

[Add the UI library or CSS framework used in this project]

[Add the routing/data-fetching libraries used in this project]

Backend

Node.js

Express.js

JWT authentication

Password hashing with [bcrypt/bcryptjs, if used]

Database

PostgreSQL

[Add the ORM/query builder used: Prisma, Sequelize, Drizzle, Knex,
or SQL queries]

Testing

[Add the testing framework used, such as Jest, Vitest, or
Supertest]

Project Structure

The exact structure may differ in this repository. A common layout is:

project-root/
├── client/             # React frontend
├── server/             # Express backend
├── README.md
└── package.json        # Optional root scripts

Prerequisites

Install the following before running the project:

Node.js (LTS recommended)

npm

PostgreSQL

Git

Getting Started

1. Clone the repository

git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>

1. Install dependencies

If the frontend and backend are separate applications, install
dependencies in each folder:

cd client
npm install
cd ../server
npm install

If your project uses different folder names, replace client and
server with the correct paths.

1. Configure environment variables

Create a .env file in the backend directory. Use the variable names
expected by your code.

Example only:

PORT=5000
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/erp_db
JWT_SECRET=replace_with_a_long_random_secret
NODE_ENV=development

If the frontend needs a backend URL, create its environment file using
the variable name expected by your frontend build tool. For Vite, a
variable exposed to browser code commonly starts with VITE_:

VITE_API_BASE_URL=<http://localhost:5000>

Important: These are example variable names. Check the source code
and existing environment examples for the exact names required. Never
commit real passwords, API keys, or JWT secrets.

1. Create the PostgreSQL database

Open PostgreSQL using psql or a database client and create a database:

CREATE DATABASE erp_db;

Then configure the connection string in the backend .env file.

1. Run migrations and seed data

Use the commands for the ORM or database tooling actually configured in
this project.

Examples (do not run unless they match your setup):

# Prisma example

npx prisma migrate dev
npx prisma db seed

If the project uses SQL scripts, Sequelize, Drizzle, Knex, or another
tool, replace these commands with the appropriate migration and seed
instructions.

1. Start the backend

From the backend directory, run the script defined in
server/package.json. Common examples are:

npm run dev

or:

npm start

1. Start the frontend

Open a second terminal and run:

cd client
npm run dev

Open the local URL printed by the frontend development server in your
browser.

Business Workflow

The intended workflow is:

Sign in with an authorized account.

Create a customer enquiry and add requested products.

Prepare a quotation with item pricing, discount, and GST.

Mark the quotation as accepted or rejected.

Convert an accepted quotation into a sales order.

Confirm the order and reserve available inventory.

Dispatch the order and update physical and reserved stock.

Inventory calculation

Available Quantity = Physical Quantity - Reserved Quantity

For example, if physical stock is 200 and reserved stock is 60,
available stock is 140.

Inventory reservation and dispatch operations should be validated by the
backend and protected against duplicate or concurrent operations.

API Documentation

Document the actual endpoints supported by this project here. Example
routes for this type of application may include:

Method                  Endpoint                       Purpose

POST                    /auth/login                  Authenticate a user

POST                    /enquiries                   Create an enquiry

GET                     /enquiries                   List enquiries

POST                    /quotations                  Create a quotation

PATCH                   /quotations/:id/status       Update quotation status

POST                    /quotations/:id/convert      Convert an accepted
quotation to a sales
order

GET                     /sales-orders                List sales orders

POST                    /sales-orders/:id/confirm    Confirm an order and
reserve stock

These routes are illustrative. Replace them with the actual routes
from your backend. If available, add a link to your Postman collection
or Swagger/OpenAPI documentation.

Running Tests

Run the test command configured in the relevant package.json. For
example:

npm test

Update this section with the exact command and test framework used by
the project.

Recommended tests include:

Quotation totals are calculated correctly.

Draft or rejected quotations cannot be converted into sales orders.

One quotation cannot create duplicate sales orders.

Inventory reservations cannot exceed available stock.

Unauthorized users cannot perform restricted operations.

Concurrent reservations cannot oversell inventory.

Demo Credentials

Add development/demo credentials here only if you have configured them:

Role         Email            Password

Admin        Add demo email   Add demo password
Sales User   Add demo email   Add demo password

Do not publish real user credentials or production passwords.

Screenshots and Demo

Add screenshots or a short demo video link here:

Application screenshots: <ADD_SCREENSHOT_LINKS>

Demo video: <ADD_DEMO_VIDEO_LINK>

Security Notes

Keep .env files out of version control.

Store passwords as hashes, never as plain text.

Validate and authorize sensitive operations on the backend.

Use database transactions for workflows that must update multiple
related records atomically.

Do not trust prices, totals, roles, or inventory values sent by the
frontend without server-side validation.

Contributing

Create a feature branch.

Make focused changes.

Run tests and check the application locally.

Commit your changes with clear messages.

Open a pull request describing the changes.

License

No license has been specified. Add a LICENSE file and update this
section if you intend to publish the project under a particular license.
