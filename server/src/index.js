require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const cookiesPars = require("cookie-parser");
const api = require("./api");
const path = require("path");

// Log a message to indicate that the server is starting
console.info("Starting server...");

// Enable Cross-Origin Resource Sharing (CORS) for all routes
app.use(cors({ origin: true, credentials: true }));

app.use(express.static("client/dist"));

// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Log HTTP requests in the console
app.use(morgan("dev"));

// Parse cookies in the request
app.use(cookiesPars());

// Mount the API routes under the "/api" prefix
app.use("/api", api);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});
