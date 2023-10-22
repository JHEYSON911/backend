const reqValidatorContent = (body) => {
  if (!body || Object.keys(body).length === 0) {
    throw new Error(`Bad request`);
  }
};

module.exports = reqValidatorContent;
