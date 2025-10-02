URL Shortener – Express + TypeScript

A small full-stack URL shortener built as a take-home.
Validates URLs, generates short hashes, stores mappings in memory, and provides a simple browser UI.

🚀 Features

Express + TypeScript with clear layers (routes → controllers → services/helpers)

URL validation + random short-code generation

In-memory store (hit counts per link)

POST /url/shorten → JSON response

GET /url/:hash → redirect

Minimal browser UI (index.html)

Jest unit tests for helpers + error handling

🛠 Tech Stack

Node.js + Express (ESM)

TypeScript (NodeNext)

Jest / ts-jest

Nodemon

⚡ Quick Start
npm install # install deps
npm run dev # dev server (autoreload)
npm run build # compile TypeScript
npm start # start compiled app
npm test # run tests

Optional .env file:

BASE_URL=http://localhost:3000/url
JWT_SECRET=your-secret

📂 Project Structure
src/
app.ts # Express app setup
bin/www.ts # Server entry point
controllers/ # Route handlers (shorten, redirect)
helpers/ # Shared helpers (errorHandler, URL utils)
routes/ # Express routers
services/ # Business logic (shortenUrl service)
types/ # Type aliases, shared TS types
public/ # Static frontend (index.html, CSS)
views/ # Jade templates (default Express generator)

🌐 API Overview

POST /url/shorten → { originalUrl } → returns { message, shortUrl, hash }

GET /url/:hash → redirects to original URL (404 if missing)

🔮 Next Steps

Replace memory store with Postgres/Redis/DynamoDB

Add analytics (click counts, timestamps)

Expand frontend (React/Vue/Next.js)

Dockerize for deployment
