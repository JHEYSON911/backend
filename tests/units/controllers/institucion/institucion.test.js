const institucionService = require("../../../../src/services/institucion/institucion.js");
const institucionController = require("../../../../src/controllers/institucion/institucion.js");
const handleErrorController = require("../../../../src/utils/handleErrorController.js");

jest.mock("../../../../src/services/institucion/institucion.js");
jest.mock("../../../../src/utils/handleErrorController.js");

describe("institucionController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should get all institutions successfully", async () => {
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      institucionService.getAll.mockResolvedValue([{ id: 1 }, { id: 2 }]);

      await institucionController.getAll({}, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: [{ id: 1 }, { id: 2 }],
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error getting institutions";
      institucionService.getAll.mockRejectedValue(new Error(errorMessage));

      await institucionController.getAll({}, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("getById", () => {
    it("should get an institution by ID successfully", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      institucionService.getById.mockResolvedValue({
        id: 1,
        name: "Example Institution",
      });

      await institucionController.getById(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { id: 1, name: "Example Institution" },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error getting institution by ID";
      institucionService.getById.mockRejectedValue(new Error(errorMessage));

      await institucionController.getById(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("create", () => {
    it("should create a new institution successfully", async () => {
      const mockReq = { body: { bodyData: { name: "Example Institution" } } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      institucionService.create.mockResolvedValue({
        id: 1,
        name: "Example Institution",
      });

      await institucionController.create(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { id: 1, name: "Example Institution" },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { body: { bodyData: { name: "Example Institution" } } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error creating institution";
      institucionService.create.mockRejectedValue(new Error(errorMessage));

      await institucionController.create(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("update", () => {
    it("should update an institution successfully", async () => {
      const mockReq = {
        params: { id: 1 },
        body: { bodyData: { name: "Updated Institution" } },
      };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      institucionService.update.mockResolvedValue({
        id: 1,
        name: "Updated Institution",
      });

      await institucionController.update(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { id: 1, name: "Updated Institution" },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = {
        params: { id: 1 },
        body: { bodyData: { name: "Updated Institution" } },
      };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error updating institution";
      institucionService.update.mockRejectedValue(new Error(errorMessage));

      await institucionController.update(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("destroy", () => {
    it("should delete an institution successfully", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      institucionService.destroy.mockResolvedValue({
        id: 1,
        name: "Example Institution",
      });

      await institucionController.destroy(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { id: 1, name: "Example Institution" },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error deleting institution";
      institucionService.destroy.mockRejectedValue(new Error(errorMessage));

      await institucionController.destroy(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });
});
