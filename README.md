URL Shortener – Express + TypeScript

A small full-stack URL shortener built for an interview take-home.
It validates incoming URLs, generates short hashes, stores mappings in memory, and serves a simple browser UI.

🚀 Key Features

ESM Express app in TypeScript with layered structure (routes → controllers → services/helpers).

URL validation (parseUrl) and random short-code generation.

In-memory store that tracks hit counts for each short link.

POST /url/shorten API returns JSON { message, shortUrl, hash }.

GET /url/:hash redirects back to the original URL.

Static public/index.html provides a basic UI to shorten links.

Jest + ts-jest unit tests for helper modules and the error handler.

🛠 Tech Stack

Node.js + Express (ESM)

TypeScript (NodeNext module resolution)

Jest / ts-jest for testing

Nodemon for dev autoreload

⚡ Getting Started
Install dependencies
npm install

Configure environment (optional)

Create a .env file (see .env.example if present), for example:

BASE_URL=http://localhost:3000/url
JWT_SECRET=your-secret

Development server (rebuilds TS + restarts Node)
npm run dev

Build TypeScript for production
npm run build

Start compiled app
npm start

✅ Testing

Run the unit tests:

npm test

Watch mode:

npm run test:watch

Tests live alongside helpers and cover URL parsing, hash generation, in-memory storage, and error handling.

📂 Project Structure
src/
app.ts # Express bootstrapping
bin/
db.ts # Postgres connection stub
www.ts # HTTP server entry
controllers/
shorten.controller.ts # Shorten + redirect handlers
helpers/
errorHandler.ts # Shared Express error middleware
routes/
urlRoutes.ts # /url router
services/
shortenUrl/
helpers/
urlHelpers.ts # parseUrl, generateHash, store
urlHelpers.test.ts # helper unit tests
shorten.service.ts # service placeholder (future persistence)
types/
controller.ts # shared Controller type alias
public/
index.html # minimal front-end
stylesheets/style.css
views/
layout.jade, index.jade, error.jade (Express generator templates)
jest.config.cjs
tsconfig.json

🌐 API Overview

POST /url/shorten

Request: { originalUrl: string }

Response: { message, shortUrl, hash }

GET /url/:hash

Redirects to original URL

Returns 404 if hash is missing

🔮 Next Ideas

Replace in-memory Map with a real database (Postgres, Redis, DynamoDB).

Add analytics (click counts, timestamps).

Build a richer front end (React/Vue/Next.js).

Dockerize for deployment.

Add integration tests for routes.

📜 License

MIT License (or add your own).
