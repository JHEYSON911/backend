const estudianteService = require("../../../src/services/estudiante");
const Estudiante = require("../../../src/models/estudiante");
const Certificado = require("../../../src/models/certificado/certificado");
const Solicitud = require("../../../src/models/solicitud/solicitud");
const Calificacion = require("../../../src/models/modulo/calificacion");
const Curso = require("../../../src/models/modulo/curso");
const PlanEstudiante = require("../../../src/models/intermedio/estudiante_planestudio");
const PlanEstudio = require("../../../src/models/plan_estudio/plan_estudio");
const contentValidator = require("../../../src/utils/contentValidator");

jest.mock("../../../src/models/estudiante"); // Mockeamos el modelo Estudiante
jest.mock(".../../../src/utils/contentValidator"); // Mockeamos la función contentValidator

describe("estudianteService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should return all students", async () => {
      const mockStudents = [
        { id: 1, name: "Student1" },
        { id: 2, name: "Student2" },
      ];
      Estudiante.findAll.mockResolvedValue(mockStudents);

      const result = await estudianteService.getAll();

      expect(result).toEqual(mockStudents);
      expect(Estudiante.findAll).toHaveBeenCalled();
      expect(contentValidator).toHaveBeenCalledWith(mockStudents);
    });

    it("should throw an error if Estudiante.findAll fails", async () => {
      const errorMessage = "Error fetching students";
      Estudiante.findAll.mockRejectedValue(new Error(errorMessage));

      await expect(estudianteService.getAll()).rejects.toThrow(errorMessage);
    });
  });

  describe("getById", () => {
    it("should return a student by ID", async () => {
      const mockId = 1;
      const mockStudent = { id: mockId, name: "Student1" };
      Estudiante.findByPk.mockResolvedValue(mockStudent);

      const result = await estudianteService.getById(mockId);

      expect(result).toEqual(mockStudent);
      expect(Estudiante.findByPk).toHaveBeenCalledWith(mockId);
      expect(contentValidator).toHaveBeenCalledWith(mockStudent);
    });

    it("should throw an error if Estudiante.findByPk fails", async () => {
      const mockId = 1;
      const errorMessage = "Error fetching student by ID";
      Estudiante.findByPk.mockRejectedValue(new Error(errorMessage));

      await expect(estudianteService.getById(mockId)).rejects.toThrow(
        errorMessage,
      );
    });
  });

  describe("create", () => {
    it("should create a new student", async () => {
      const mockStudent = { name: "New Student" };
      const mockCreatedStudent = { id: 3, ...mockStudent };
      Estudiante.create.mockResolvedValue(mockCreatedStudent);

      const result = await estudianteService.create(mockStudent);

      expect(result).toEqual(mockCreatedStudent);
      expect(Estudiante.create).toHaveBeenCalledWith(mockStudent);
      expect(contentValidator).toHaveBeenCalledWith(mockCreatedStudent);
    });

    it("should throw an error if Estudiante.create fails", async () => {
      const mockStudent = { name: "New Student" };
      const errorMessage = "Error creating student";
      Estudiante.create.mockRejectedValue(new Error(errorMessage));

      await expect(estudianteService.create(mockStudent)).rejects.toThrow(
        errorMessage,
      );
    });
  });

  describe("update", () => {
    it("should update a student by ID", async () => {
      const mockId = 1;
      const mockStudent = { name: "Updated Student" };
      // eslint-disable-next-line no-unused-vars
      const mockUpdateStudent = { id: mockId, ...mockStudent };
      Estudiante.update.mockResolvedValue([1]); // Indica que se actualizó 1 registro

      const result = await estudianteService.update(mockId, mockStudent);

      expect(result).toEqual([1]);
      expect(Estudiante.update).toHaveBeenCalledWith(mockStudent, {
        where: { id: mockId },
      });
      expect(contentValidator).toHaveBeenCalledWith([1]);
    });

    it("should throw an error if Estudiante.update fails", async () => {
      const mockId = 1;
      const mockStudent = { name: "Updated Student" };
      const errorMessage = "Error updating student";
      Estudiante.update.mockRejectedValue(new Error(errorMessage));

      await expect(
        estudianteService.update(mockId, mockStudent),
      ).rejects.toThrow(errorMessage);
    });
  });

  describe("destroy", () => {
    it("should delete a student by ID", async () => {
      const mockId = 1;
      Estudiante.destroy.mockResolvedValue(1); // Indica que se eliminó 1 registro

      const result = await estudianteService.destroy(mockId);

      expect(result).toEqual(1);
      expect(Estudiante.destroy).toHaveBeenCalledWith({
        where: { id: mockId },
      });
      expect(contentValidator).toHaveBeenCalledWith(1);
    });

    it("should throw an error if Estudiante.destroy fails", async () => {
      const mockId = 1;
      const errorMessage = "Error deleting student";
      Estudiante.destroy.mockRejectedValue(new Error(errorMessage));

      await expect(estudianteService.destroy(mockId)).rejects.toThrow(
        errorMessage,
      );
    });
  });

  describe("searchStudentByUserId", () => {
    it("should return a student by user ID", async () => {
      const mockUserId = 123;
      const mockStudent = { id: 1, name: "Student1", userId: mockUserId };
      Estudiante.findOne.mockResolvedValue(mockStudent);

      const result = await estudianteService.searchStudentByUserId(mockUserId);

      expect(result).toEqual(mockStudent);
      expect(Estudiante.findOne).toHaveBeenCalledWith({
        where: { userId: mockUserId },
      });
      expect(contentValidator).toHaveBeenCalledWith(mockStudent);
    });

    it("should throw an error if Estudiante.findOne fails", async () => {
      const mockUserId = 123;
      const errorMessage = "Error searching student by user ID";
      Estudiante.findOne.mockRejectedValue(new Error(errorMessage));

      await expect(
        estudianteService.searchStudentByUserId(mockUserId),
      ).rejects.toThrow(errorMessage);
    });
  });

  describe("searchCertificatesByStudentCode", () => {
    it("should return certificates for a student by code", async () => {
      const mockCode = "ABC123";
      const mockStudent = { id: 1, name: "Student1", codigo: mockCode };
      const mockCertificates = [
        { id: 1, name: "Certificate1" },
        { id: 2, name: "Certificate2" },
      ];
      Estudiante.findOne.mockResolvedValue({
        ...mockStudent,
        Certificados: mockCertificates,
      });

      const result =
        await estudianteService.searchCertificatesByStudentCode(mockCode);

      expect(result).toEqual({
        ...mockStudent,
        Certificados: mockCertificates,
      });
      expect(Estudiante.findOne).toHaveBeenCalledWith({
        where: { codigo: mockCode },
        include: { model: Certificado },
      });
      expect(contentValidator).toHaveBeenCalledWith({
        ...mockStudent,
        Certificados: mockCertificates,
      });
    });

    it("should throw an error if Estudiante.findOne fails", async () => {
      const mockCode = "ABC123";
      const errorMessage = "Error searching certificates by student code";
      Estudiante.findOne.mockRejectedValue(new Error(errorMessage));

      await expect(
        estudianteService.searchCertificatesByStudentCode(mockCode),
      ).rejects.toThrow(errorMessage);
    });
  });

  describe("searchRequestsByStudentCode", () => {
    it("should return requests for a student by code", async () => {
      const mockCode = "ABC123";
      const mockStudent = { id: 1, name: "Student1", codigo: mockCode };
      const mockRequests = [
        { id: 1, name: "Request1" },
        { id: 2, name: "Request2" },
      ];
      Estudiante.findOne.mockResolvedValue({
        ...mockStudent,
        Solicitudes: mockRequests,
      });

      const result =
        await estudianteService.searchRequestsByStudentCode(mockCode);

      expect(result).toEqual({ ...mockStudent, Solicitudes: mockRequests });
      expect(Estudiante.findOne).toHaveBeenCalledWith({
        where: { codigo: mockCode },
        include: { model: Solicitud },
      });
      expect(contentValidator).toHaveBeenCalledWith({
        ...mockStudent,
        Solicitudes: mockRequests,
      });
    });

    it("should throw an error if Estudiante.findOne fails", async () => {
      const mockCode = "ABC123";
      const errorMessage = "Error searching requests by student code";
      Estudiante.findOne.mockRejectedValue(new Error(errorMessage));

      await expect(
        estudianteService.searchRequestsByStudentCode(mockCode),
      ).rejects.toThrow(errorMessage);
    });
  });

  describe("searchCalificationsByEstudentCode", () => {
    it("should return califications for a student by code", async () => {
      const mockCode = "ABC123";
      const mockStudent = { id: 1, name: "Student1", codigo: mockCode };
      const mockCalifications = [
        { id: 1, score: 90, Curso: { id: 1, name: "Course1" } },
        { id: 2, score: 85, Curso: { id: 2, name: "Course2" } },
      ];
      Estudiante.findOne.mockResolvedValue({
        ...mockStudent,
        Calificaciones: mockCalifications,
      });

      const result =
        await estudianteService.searchCalificationsByEstudentCode(mockCode);

      expect(result).toEqual({
        ...mockStudent,
        Calificaciones: mockCalifications,
      });
      expect(Estudiante.findOne).toHaveBeenCalledWith({
        where: { codigo: mockCode },
        include: { model: Calificacion, include: { model: Curso } },
      });
      expect(contentValidator).toHaveBeenCalledWith({
        ...mockStudent,
        Calificaciones: mockCalifications,
      });
    });

    it("should throw an error if Estudiante.findOne fails", async () => {
      const mockCode = "ABC123";
      const errorMessage = "Error searching califications by student code";
      Estudiante.findOne.mockRejectedValue(new Error(errorMessage));

      await expect(
        estudianteService.searchCalificationsByEstudentCode(mockCode),
      ).rejects.toThrow(errorMessage);
    });
  });

  describe("searchPlanEstudioByStudentCode", () => {
    it("should return plan de estudio for a student by code", async () => {
      const mockCode = "ABC123";
      const mockStudent = { id: 1, name: "Student1", codigo: mockCode };
      const mockPlanEstudio = { id: 1, name: "Plan1" };
      Estudiante.findOne.mockResolvedValue({
        ...mockStudent,
        PlanEstudios: [mockPlanEstudio],
      });

      const result =
        await estudianteService.searchPlanEstudioByStudentCode(mockCode);

      expect(result).toEqual({
        ...mockStudent,
        PlanEstudios: [mockPlanEstudio],
      });
      expect(Estudiante.findOne).toHaveBeenCalledWith({
        where: { codigo: mockCode },
        include: { model: PlanEstudio, through: { model: PlanEstudiante } },
      });
      expect(contentValidator).toHaveBeenCalledWith({
        ...mockStudent,
        PlanEstudios: [mockPlanEstudio],
      });
    });

    it("should throw an error if Estudiante.findOne fails", async () => {
      const mockCode = "ABC123";
      const errorMessage = "Error searching plan de estudio by student code";
      Estudiante.findOne.mockRejectedValue(new Error(errorMessage));

      await expect(
        estudianteService.searchPlanEstudioByStudentCode(mockCode),
      ).rejects.toThrow(errorMessage);
    });
  });
});
