const estudianteService = require("../../../src/services/estudiante");
const studentController = require("../../../src/controllers/estudiante");
const handleErrorController = require("../../../src/utils/handleErrorController.js");

jest.mock("../../../src/services/estudiante.js");
jest.mock("../../../src/utils/handleErrorController.js");

describe("studentController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should get all students successfully", async () => {
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      estudianteService.getAll.mockResolvedValue([{ id: 1 }, { id: 2 }]);

      await studentController.getAll({}, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: [{ id: 1 }, { id: 2 }],
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error getting students";
      estudianteService.getAll.mockRejectedValue(new Error(errorMessage));

      await studentController.getAll({}, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("getById", () => {
    it("should get a student by ID successfully", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      estudianteService.getById.mockResolvedValue({
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
      const errorMessage = "Error getting student by ID";
      estudianteService.getById.mockRejectedValue(new Error(errorMessage));

      await studentController.getById(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("create", () => {
    it("should create a new student successfully", async () => {
      const mockReq = { body: { bodyData: { nombre: "John Doe" } } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      estudianteService.create.mockResolvedValue({ id: 1, nombre: "John Doe" });

      await studentController.create(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { id: 1, nombre: "John Doe" },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { body: { bodyData: { nombre: "John Doe" } } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error creating student";
      estudianteService.create.mockRejectedValue(new Error(errorMessage));

      await studentController.create(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("update", () => {
    it("should update a student successfully", async () => {
      const mockReq = {
        params: { id: 1 },
        body: { bodyData: { nombre: "John Doe" } },
      };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      estudianteService.update.mockResolvedValue({ id: 1, nombre: "John Doe" });

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
      const errorMessage = "Error updating student";
      estudianteService.update.mockRejectedValue(new Error(errorMessage));

      await studentController.update(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("destroy", () => {
    it("should destroy a student successfully", async () => {
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      estudianteService.destroy.mockResolvedValue({
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
      const errorMessage = "Error destroying student";
      estudianteService.destroy.mockRejectedValue(new Error(errorMessage));

      await studentController.destroy(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("getCertificatesByCode", () => {
    it("should get certificates by student code successfully", async () => {
      const mockReq = { params: { code: "ABC123" } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      estudianteService.searchCertificatesByStudentCode.mockResolvedValue({
        studentCode: "ABC123",
        certificates: [],
      });

      await studentController.getCertificatesByCode(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { studentCode: "ABC123", certificates: [] },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { params: { code: "ABC123" } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error getting certificates by student code";
      estudianteService.searchCertificatesByStudentCode.mockRejectedValue(
        new Error(errorMessage),
      );

      await studentController.getCertificatesByCode(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("getRequestsByCode", () => {
    it("should get requests by student code successfully", async () => {
      const mockReq = { params: { code: "ABC123" } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      estudianteService.searchRequestsByStudentCode.mockResolvedValue({
        studentCode: "ABC123",
        requests: [],
      });

      await studentController.getRequestsByCode(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { studentCode: "ABC123", requests: [] },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { params: { code: "ABC123" } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error getting requests by student code";
      estudianteService.searchRequestsByStudentCode.mockRejectedValue(
        new Error(errorMessage),
      );

      await studentController.getRequestsByCode(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("getCalificationsByStudentCode", () => {
    it("should get califications by student code successfully", async () => {
      const mockReq = { params: { code: "ABC123" } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      estudianteService.searchCalificationsByEstudentCode.mockResolvedValue({
        studentCode: "ABC123",
        califications: [],
      });

      await studentController.getCalificationsByStudentCode(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { studentCode: "ABC123", califications: [] },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { params: { code: "ABC123" } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error getting califications by student code";
      estudianteService.searchCalificationsByEstudentCode.mockRejectedValue(
        new Error(errorMessage),
      );

      await studentController.getCalificationsByStudentCode(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });

  describe("getPlanByStudentCode", () => {
    it("should get plan by student code successfully", async () => {
      const mockReq = { params: { code: "ABC123" } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      estudianteService.searchPlanEstudioByStudentCode.mockResolvedValue({
        studentCode: "ABC123",
        plan: [],
      });

      await studentController.getPlanByStudentCode(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        data: { studentCode: "ABC123", plan: [] },
      });
    });

    it("should handle errors and call handleErrorController", async () => {
      const mockReq = { params: { code: "ABC123" } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = "Error getting plan by student code";
      estudianteService.searchPlanEstudioByStudentCode.mockRejectedValue(
        new Error(errorMessage),
      );

      await studentController.getPlanByStudentCode(mockReq, mockRes);

      expect(handleErrorController).toHaveBeenCalledWith(errorMessage, mockRes);
    });
  });
});
