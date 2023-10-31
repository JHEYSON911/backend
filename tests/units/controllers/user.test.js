const userController = require("../../../src/controllers/user");
const userService = require("../../../src/services/user.js");
const handleErrorController = require("../../../src/utils/handleErrorController.js");

jest.mock("../../../src/services/user.js"); // Mockeamos el servicio userService
jest.mock("../../../src/utils/handleErrorController.js"); // Mockeamos la función handleErrorController

describe("userController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should return all users", async () => {
      const mockUsers = [
        { id: 1, username: "user1" },
        { id: 2, username: "user2" },
      ];
      userService.getAll.mockResolvedValue(mockUsers);
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await userController.getAll({}, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({ data: mockUsers });
    });

    it("should handle errors and call handleErrorController", async () => {
      const errorMessage = "Error fetching users";
      userService.getAll.mockRejectedValue(new Error(errorMessage));
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await userController.getAll({}, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("getById", () => {
    it("should return a user by ID", async () => {
      const mockId = 1;
      const mockUser = { id: mockId, username: "user1" };
      userService.getById.mockResolvedValue(mockUser);
      const mockReq = { params: { id: mockId } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await userController.getById(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({ data: mockUser });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockId = 1;
      const errorMessage = "Error fetching user by ID";
      userService.getById.mockRejectedValue(new Error(errorMessage));
      const mockReq = { params: { id: mockId } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await userController.getById(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("create", () => {
    it("should create a new user", async () => {
      const mockUserData = { username: "newUser" };
      const mockCreatedUser = { id: 3, ...mockUserData };
      userService.create.mockResolvedValue(mockCreatedUser);
      const mockReq = { body: { bodyData: mockUserData } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await userController.create(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({ data: mockCreatedUser });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockUserData = { username: "newUser" };
      const errorMessage = "Error creating user";
      userService.create.mockRejectedValue(new Error(errorMessage));
      const mockReq = { body: { bodyData: mockUserData } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await userController.create(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("update", () => {
    it("should update a user by ID", async () => {
      const mockId = 1;
      const mockUserData = { username: "updatedUser" };
      // eslint-disable-next-line no-unused-vars
      const mockUpdateUser = { id: mockId, ...mockUserData };
      userService.update.mockResolvedValue([1]); // Indica que se actualizó 1 registro
      const mockReq = {
        params: { id: mockId },
        body: { bodyData: mockUserData },
      };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await userController.update(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({ data: [1] });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockId = 1;
      const mockUserData = { username: "updatedUser" };
      const errorMessage = "Error updating user";
      userService.update.mockRejectedValue(new Error(errorMessage));
      const mockReq = {
        params: { id: mockId },
        body: { bodyData: mockUserData },
      };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await userController.update(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("destroy", () => {
    it("should delete a user by ID", async () => {
      const mockId = 1;
      userService.destroy.mockResolvedValue(1); // Indica que se eliminó 1 registro
      const mockReq = { params: { id: mockId } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await userController.destroy(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({ data: 1 });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockId = 1;
      const errorMessage = "Error deleting user";
      userService.destroy.mockRejectedValue(new Error(errorMessage));
      const mockReq = { params: { id: mockId } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await userController.destroy(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });
});
