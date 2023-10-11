const userService = require("../../src/services/user.js");
it("Resiviendo respuesta not found", async () => {
  try {
    const users = await userService.getAll();
    return users;
  } catch (err) {
    expect(err.message).toEqual("Resource not found");
  }
});
