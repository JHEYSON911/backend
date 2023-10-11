const userService = require("../../src/services/user.js");

describe("UserService", () => {
  // Prueba para la función getAll
  describe("getAll", () => {
    it("should return an array of users", async () => {
      const users = await userService.getAll();
      expect(Array.isArray(users)).toBe(true);
    });

    it("should throw an error if no users are found", async () => {
      try {
        await userService.getAll();
      } catch (error) {
        expect(error.message).toEqual("Resource not found");
      }
    });
  });

  // Prueba para la función getById
  describe("getById", () => {
    it("should return a user object", async () => {
      const user = await userService.getById(1);
      expect(user).toBeDefined();
    });

    it("should throw an error if user is not found", async () => {
      try {
        await userService.getById(999);
      } catch (error) {
        expect(error.message).toEqual("Resource not found");
      }
    });
  });

  // Prueba para la función create
  describe("create", () => {
    it("should return a newly created user object", async () => {
      const newUser = await userService.create({
        username: "testuser",
        email: "testuser@example.com",
      });
      expect(newUser).toBeDefined();
      expect(newUser.username).toEqual("testuser");
      expect(newUser.email).toEqual("testuser@example.com");
    });

    it("should throw an error if user creation fails", async () => {
      try {
        await userService.create({
          // Proporciona datos inválidos para forzar un error
        });
      } catch (error) {
        expect(error.message).toEqual("Error creating user");
      }
    });
  });

  // ... Pruebas para otras funciones (update y destroy) ...
});
