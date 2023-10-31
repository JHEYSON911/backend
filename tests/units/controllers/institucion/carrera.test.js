const carreraService = require("../../../../src/services/institucion/carrera.js");
const carreraController = require("../../../../src/controllers/institucion/carrera.js");
const handleErrorController = require("../../../../src/utils/handleErrorController.js");

jest.mock("../../../../src/services/institucion/carrera.js");
jest.mock("../../../../src/utils/handleErrorController.js");

describe("carreraController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should get all majors successfully", async () => {
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      carreraService.getAll.mockResolvedValue([{ id: 1 }, { id: 2 }]);

      await carreraController.getAll({}, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: [{ id: 1 }, { id: 2 }],
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error getting majors";
      carreraService.getAll.mockRejectedValue(new Error(errorMessage));

      await carreraController.getAll({}, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("getById", () => {
    it("should get a major by ID successfully", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      carreraService.getById.mockResolvedValue({
        id: 1,
        name: "Example Major",
      });

      await carreraController.getById(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { id: 1, name: "Example Major" },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error getting major by ID";
      carreraService.getById.mockRejectedValue(new Error(errorMessage));

      await carreraController.getById(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("create", () => {
    it("should create a new major successfully", async () => {
      const mockReq = { body: { bodyData: { name: "Example Major" } } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      carreraService.create.mockResolvedValue({ id: 1, name: "Example Major" });

      await carreraController.create(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { id: 1, name: "Example Major" },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { body: { bodyData: { name: "Example Major" } } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error creating major";
      carreraService.create.mockRejectedValue(new Error(errorMessage));

      await carreraController.create(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("update", () => {
    it("should update a major successfully", async () => {
      const mockReq = {
        params: { id: 1 },
        body: { bodyData: { name: "Updated Major" } },
      };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      carreraService.update.mockResolvedValue({ id: 1, name: "Updated Major" });

      await carreraController.update(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { id: 1, name: "Updated Major" },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = {
        params: { id: 1 },
        body: { bodyData: { name: "Updated Major" } },
      };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error updating major";
      carreraService.update.mockRejectedValue(new Error(errorMessage));

      await carreraController.update(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("destroy", () => {
    it("should delete a major successfully", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      carreraService.destroy.mockResolvedValue({
        id: 1,
        name: "Example Major",
      });

      await carreraController.destroy(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { id: 1, name: "Example Major" },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error deleting major";
      carreraService.destroy.mockRejectedValue(new Error(errorMessage));

      await carreraController.destroy(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("getPlansByCarreraId", () => {
    it("should get plans by carrera ID successfully", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      carreraService.searchPlanByCarreraId.mockResolvedValue([
        { id: 1 },
        { id: 2 },
      ]);

      await carreraController.getPlansByCarreraId(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: [{ id: 1 }, { id: 2 }],
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error getting plans by carrera ID";
      carreraService.searchPlanByCarreraId.mockRejectedValue(
        new Error(errorMessage),
      );

      await carreraController.getPlansByCarreraId(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });
});
