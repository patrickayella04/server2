URL Shortener – Express + TypeScript

A small full-stack URL shortener built as a take-home. It validates URLs, generates short hashes, stores mappings in memory, and provides a simple browser UI.

🚀 Features

Express + TypeScript with layered structure (routes → controllers → services/helpers)

URL validation + random short-code generation

In-memory store (hit counts per link)

POST /url/shorten → returns { message, shortUrl, hash }

GET /url/:hash → redirects to original URL

Minimal browser UI (public/index.html)

Centralized error handling middleware

Jest + ts-jest unit tests for helpers and error handling

🛠 Tech Stack

Node.js + Express (ESM)

TypeScript (NodeNext)

Jest / ts-jest

Nodemon for dev autoreload

⚡ Getting Started

1. Clone the repo
   git clone https://github.com/patrickayella04/server2.git
   cd server2

2. Install dependencies
   npm install

3. Development mode (watch + autoreload)
   npm run dev

Runs tsc in watch mode and restarts Node automatically.

4. Build for production
   npm run build

Compiles TypeScript to dist/.

5. Start compiled app
   npm start

Runs node dist/bin/www.js.

6. Run tests
   npm test

Optional: watch mode for tests

npm run test:watch

⚙️ Environment Variables

Create a .env file (optional). Example:

BASE_URL=http://localhost:3000/url
JWT_SECRET=your-secret

📂 Project Structure
src/
app.ts # Express app setup
bin/
www.ts # Server entry point
controllers/ # Route handlers (shorten, redirect)
helpers/ # Shared helpers (errorHandler, URL utils)
routes/ # Express routers
services/
shortenUrl/ # Business logic
types/ # Shared TypeScript types
public/
index.html # Minimal UI
stylesheets/ # CSS
views/
layout.jade, index.jade, error.jade
jest.config.cjs
tsconfig.json

🌐 API Overview

POST /url/shorten
Request:

{ "originalUrl": "https://example.com" }

Response:

{ "message": "URL is valid", "shortUrl": "http://localhost:3000/url/abc123", "hash": "abc123" }

GET /url/:hash

Redirects to original URL

Returns 404 if hash not found

🔮 Next Steps

Replace in-memory Map with a real database (Postgres, Redis, DynamoDB)

Add analytics (click counts, timestamps)

Expand frontend (React/Vue/Next.js)

Dockerize for deployment
