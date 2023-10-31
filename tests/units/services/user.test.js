const userService = require("../../../src/services/user");
const User = require("../../../src/models/user");
const contentValidator = require("../../../src/utils/contentValidator");

jest.mock("../../../src/models/user");
jest.mock("../../../src/utils/contentValidator");

describe("userService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should return all users", async () => {
      const mockUsers = [
        { id: 1, username: "user1" },
        { id: 2, username: "user2" },
      ];
      User.findAll.mockResolvedValue(mockUsers);

      const result = await userService.getAll();

      expect(result).toEqual(mockUsers);
      expect(User.findAll).toHaveBeenCalled();
      expect(contentValidator).toHaveBeenCalledWith(mockUsers);
    });

    it("should throw an error if User.findAll fails", async () => {
      const errorMessage = "Error fetching users";
      User.findAll.mockRejectedValue(new Error(errorMessage));

      await expect(userService.getAll()).rejects.toThrow(errorMessage);
    });
  });

  describe("getById", () => {
    it("should return a user by ID", async () => {
      const mockId = 1;
      const mockUser = { id: mockId, username: "user1" };
      User.findByPk.mockResolvedValue(mockUser);

      const result = await userService.getById(mockId);

      expect(result).toEqual(mockUser);
      expect(User.findByPk).toHaveBeenCalledWith(mockId);
      expect(contentValidator).toHaveBeenCalledWith(mockUser);
    });

    it("should throw an error if User.findByPk fails", async () => {
      const mockId = 1;
      const errorMessage = "Error fetching user by ID";
      User.findByPk.mockRejectedValue(new Error(errorMessage));

      await expect(userService.getById(mockId)).rejects.toThrow(errorMessage);
    });
  });

  describe("create", () => {
    it("should create a new user", async () => {
      const mockUser = { username: "newuser", password: "password123" };
      const mockCreatedUser = { id: 3, ...mockUser };
      User.create.mockResolvedValue(mockCreatedUser);

      const result = await userService.create(mockUser);

      expect(result).toEqual(mockCreatedUser);
      expect(User.create).toHaveBeenCalledWith(mockUser);
      expect(contentValidator).toHaveBeenCalledWith(mockCreatedUser);
    });

    it("should throw an error if User.create fails", async () => {
      const mockUser = { username: "newuser", password: "password123" };
      const errorMessage = "Error creating user";
      User.create.mockRejectedValue(new Error(errorMessage));

      await expect(userService.create(mockUser)).rejects.toThrow(errorMessage);
    });
  });

  describe("update", () => {
    it("should update a user by ID", async () => {
      const mockId = 1;
      const mockUser = { username: "updateduser" };
      // eslint-disable-next-line no-unused-vars
      const mockUpdateUser = { id: mockId, ...mockUser };
      User.update.mockResolvedValue([1]); // Indica que se actualizó 1 registro

      const result = await userService.update(mockId, mockUser);

      expect(result).toEqual([1]);
      expect(User.update).toHaveBeenCalledWith(mockUser, {
        where: { id: mockId },
      });
      expect(contentValidator).toHaveBeenCalledWith([1]);
    });

    it("should throw an error if User.update fails", async () => {
      const mockId = 1;
      const mockUser = { username: "updateduser" };
      const errorMessage = "Error updating user";
      User.update.mockRejectedValue(new Error(errorMessage));

      await expect(userService.update(mockId, mockUser)).rejects.toThrow(
        errorMessage,
      );
    });
  });

  describe("destroy", () => {
    it("should delete a user by ID", async () => {
      const mockId = 1;
      User.destroy.mockResolvedValue(1); // Indica que se eliminó 1 registro

      const result = await userService.destroy(mockId);

      expect(result).toEqual(1);
      expect(User.destroy).toHaveBeenCalledWith({ where: { id: mockId } });
      expect(contentValidator).toHaveBeenCalledWith(1);
    });

    it("should throw an error if User.destroy fails", async () => {
      const mockId = 1;
      const errorMessage = "Error deleting user";
      User.destroy.mockRejectedValue(new Error(errorMessage));

      await expect(userService.destroy(mockId)).rejects.toThrow(errorMessage);
    });
  });

  describe("findExist", () => {
    it("should throw an error if user with username already exists", async () => {
      const mockUsername = "existinguser";
      const mockExistingUser = { id: 1, username: mockUsername };
      User.findOne.mockResolvedValue(mockExistingUser);

      await expect(userService.findExist(mockUsername)).rejects.toThrow(
        "User already exists",
      );
    });

    it("should not throw an error if user with username does not exist", async () => {
      const mockUsername = "newuser";
      User.findOne.mockResolvedValue(null);

      await expect(userService.findExist(mockUsername)).resolves.not.toThrow();
    });

    it("should throw an error if User.findOne fails", async () => {
      const mockUsername = "existinguser";
      const errorMessage = "Error checking user existence";
      User.findOne.mockRejectedValue(new Error(errorMessage));

      await expect(userService.findExist(mockUsername)).rejects.toThrow(
        errorMessage,
      );
    });
  });

  describe("findUser", () => {
    it("should return a user by username", async () => {
      const mockUsername = "existinguser";
      const mockUser = { id: 1, username: mockUsername };
      User.findOne.mockResolvedValue(mockUser);

      const result = await userService.findUser(mockUsername);

      expect(result).toEqual(mockUser);
      expect(User.findOne).toHaveBeenCalledWith({
        where: { username: mockUsername },
      });
      expect(contentValidator).toHaveBeenCalledWith(mockUser);
    });

    it("should throw an error if User.findOne fails", async () => {
      const mockUsername = "existinguser";
      const errorMessage = "Error fetching user by username";
      User.findOne.mockRejectedValue(new Error(errorMessage));

      await expect(userService.findUser(mockUsername)).rejects.toThrow(
        errorMessage,
      );
    });
  });
});
