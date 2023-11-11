const express = require("express");
const helmet = require("helmet");
const httpStatus = require("http-status");
const { errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");
const routes = require("./routes/v1");
const app = express();
const cors = require("cors");

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Handle preflight requests
app.options("*", cors());

// Set CORS headers for all routes
app.use("*", cors());

// Define your routes
app.use("/v1", routes);

// Handle 404 - Not Found
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not Found"));
});

// Error handler middleware
app.use(errorHandler);

module.exports = app;
