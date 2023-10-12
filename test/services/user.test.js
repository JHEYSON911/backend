const userService = require("../../src/services/user.js");

jest.mock("../../src/models/user.js", () => ({
  findAll: jest.fn(),
  findByPk: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));

jest.mock("../../src/utils/contentValidator.js", () => jest.fn());

describe("userService", () => {
  const mockUser = { id: 1, name: "John Doe" };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should return all users", async () => {
      const mockUsers = [mockUser];
      const findAllMock = jest.fn(() => mockUsers);
      require("../../src/models/user.js").findAll = findAllMock;

      const result = await userService.getAll();

      expect(result).toEqual(mockUsers);
      expect(findAllMock).toHaveBeenCalledTimes(1);
      expect(
        require("../../src/utils/contentValidator.js"),
      ).toHaveBeenCalledWith(mockUsers);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Something went wrong");
      require("../../src/models/user.js").findAll = jest.fn(() => {
        throw error;
      });

      try {
        await userService.getAll();
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("getById", () => {
    it("should return a user by id", async () => {
      const findByIdMock = jest.fn(() => mockUser);
      require("../../src/models/user.js").findByPk = findByIdMock;

      const result = await userService.getById(1);

      expect(result).toEqual(mockUser);
      expect(findByIdMock).toHaveBeenCalledWith(1);
      expect(
        require("../../src/utils/contentValidator.js"),
      ).toHaveBeenCalledWith(mockUser);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Something went wrong");
      require("../../src/models/user.js").findByPk = jest.fn(() => {
        throw error;
      });

      try {
        await userService.getById(1);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("create", () => {
    it("should create a new user", async () => {
      const createUserMock = jest.fn(() => mockUser);
      require("../../src/models/user.js").create = createUserMock;

      const result = await userService.create(mockUser);

      expect(result).toEqual(mockUser);
      expect(createUserMock).toHaveBeenCalledWith(mockUser);
      expect(
        require("../../src/utils/contentValidator.js"),
      ).toHaveBeenCalledWith(mockUser);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Something went wrong");
      require("../../src/models/user.js").create = jest.fn(() => {
        throw error;
      });

      try {
        await userService.create(mockUser);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("update", () => {
    it("should update a user", async () => {
      const updateUserMock = jest.fn(() => [1]);
      require("../../src/models/user.js").update = updateUserMock;

      const result = await userService.update(1, mockUser);

      expect(result).toEqual([1]);
      expect(updateUserMock).toHaveBeenCalledWith(
        { user: mockUser },
        { where: { id: 1 } },
      );
      expect(
        require("../../src/utils/contentValidator.js"),
      ).toHaveBeenCalledWith([1]);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Something went wrong");
      require("../../src/models/user.js").update = jest.fn(() => {
        throw error;
      });

      try {
        await userService.update(1, mockUser);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("destroy", () => {
    it("should destroy a user", async () => {
      const destroyUserMock = jest.fn(() => 1);
      require("../../src/models/user.js").destroy = destroyUserMock;

      const result = await userService.destroy(1);

      expect(result).toEqual(1);
      expect(destroyUserMock).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(
        require("../../src/utils/contentValidator.js"),
      ).toHaveBeenCalledWith(1);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Something went wrong");
      require("../../src/models/user.js").destroy = jest.fn(() => {
        throw error;
      });

      try {
        await userService.destroy(1);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });
});
