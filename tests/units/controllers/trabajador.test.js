const TrabajadorService = require("../../../src/services/trabajador");
const studentController = require("../../../src/controllers/trabajador");
const handleErrorController = require("../../../src/utils/handleErrorController.js");

jest.mock("../../../src/services/trabajador.js");
jest.mock("../../../src/utils/handleErrorController.js");

describe("studentController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should get all workers successfully", async () => {
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      TrabajadorService.getAll.mockResolvedValue([{ id: 1 }, { id: 2 }]);

      await studentController.getAll({}, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: [{ id: 1 }, { id: 2 }],
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error getting workers";
      TrabajadorService.getAll.mockRejectedValue(new Error(errorMessage));

      await studentController.getAll({}, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("getById", () => {
    it("should get a worker by ID successfully", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      TrabajadorService.getById.mockResolvedValue({
        id: 1,
        nombre: "John Doe",
      });

      await studentController.getById(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { id: 1, nombre: "John Doe" },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error getting worker by ID";
      TrabajadorService.getById.mockRejectedValue(new Error(errorMessage));

      await studentController.getById(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("create", () => {
    it("should create a new worker successfully", async () => {
      const mockReq = { body: { bodyData: { nombre: "John Doe" } } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      TrabajadorService.create.mockResolvedValue({ id: 1, nombre: "John Doe" });

      await studentController.create(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { id: 1, nombre: "John Doe" },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { body: { bodyData: { nombre: "John Doe" } } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error creating worker";
      TrabajadorService.create.mockRejectedValue(new Error(errorMessage));

      await studentController.create(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("update", () => {
    it("should update a worker successfully", async () => {
      const mockReq = {
        params: { id: 1 },
        body: { bodyData: { nombre: "John Doe" } },
      };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      TrabajadorService.update.mockResolvedValue({ id: 1, nombre: "John Doe" });

      await studentController.update(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { id: 1, nombre: "John Doe" },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = {
        params: { id: 1 },
        body: { bodyData: { nombre: "John Doe" } },
      };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error updating worker";
      TrabajadorService.update.mockRejectedValue(new Error(errorMessage));

      await studentController.update(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("destroy", () => {
    it("should destroy a worker successfully", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      TrabajadorService.destroy.mockResolvedValue({
        id: 1,
        nombre: "John Doe",
      });

      await studentController.destroy(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { id: 1, nombre: "John Doe" },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error destroying worker";
      TrabajadorService.destroy.mockRejectedValue(new Error(errorMessage));

      await studentController.destroy(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });
});
