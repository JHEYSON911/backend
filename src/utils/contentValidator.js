const contentValidator = (data) => {
  if (data === undefined || data === null || data.length === 0) {
    throw new Error("Resource not found");
  }
};

module.exports = contentValidator;
