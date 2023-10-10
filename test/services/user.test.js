const userService = require("../../src/services/user.js");
it("Resiviendo respuesta not found", async () => {
  try {
    const users = await userService.getAll();
  } catch (err) {
    expect(err.message).toEqual("Resource not found");
  }
});
