const messageCodeError = {
  "Resource not found": 404,
  "Bad request": 400,
  Unauthorized: 401,
  Forbidden: 403,
};

const handleErrorController = (message, res) => {
  const statusCode = messageCodeError[message] || 500;
  return res.status(statusCode).json({
    error: {
      message,
      statusCode,
    },
  });
};

module.exports = handleErrorController;
