const majorService = require("../../../../src/services/institucion/carrera");
const Carrera = require("../../../../src/models/institucion/carrera.js");
const PlanEstudio = require("../../../../src/models/plan_estudio/plan_estudio.js");
const CarreraPlanEstudio = require("../../../../src/models/intermedio/carrera_planestudio.js");
const contentValidator = require("../../../../src/utils/contentValidator.js");

jest.mock("../../../../src/models/institucion/carrera.js"); // Mockeamos el modelo Carrera
jest.mock("../../../../src/utils/contentValidator.js"); // Mockeamos la función contentValidator

describe("majorService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should return all majors", async () => {
      const mockMajors = [
        { id: 1, name: "Major1" },
        { id: 2, name: "Major2" },
      ];
      Carrera.findAll.mockResolvedValue(mockMajors);

      const result = await majorService.getAll();

      expect(result).toEqual(mockMajors);
      expect(Carrera.findAll).toHaveBeenCalled();
      expect(contentValidator).toHaveBeenCalledWith(mockMajors);
    });

    it("should throw an error if Carrera.findAll fails", async () => {
      const errorMessage = "Error fetching majors";
      Carrera.findAll.mockRejectedValue(new Error(errorMessage));

      await expect(majorService.getAll()).rejects.toThrow(errorMessage);
    });
  });

  describe("getById", () => {
    it("should return a major by ID", async () => {
      const mockId = 1;
      const mockMajor = { id: mockId, name: "Major1" };
      Carrera.findByPk.mockResolvedValue(mockMajor);

      const result = await majorService.getById(mockId);

      expect(result).toEqual(mockMajor);
      expect(Carrera.findByPk).toHaveBeenCalledWith(mockId);
      expect(contentValidator).toHaveBeenCalledWith(mockMajor);
    });

    it("should throw an error if Carrera.findByPk fails", async () => {
      const mockId = 1;
      const errorMessage = "Error fetching major by ID";
      Carrera.findByPk.mockRejectedValue(new Error(errorMessage));

      await expect(majorService.getById(mockId)).rejects.toThrow(errorMessage);
    });
  });

  describe("create", () => {
    it("should create a new major", async () => {
      const mockMajor = { name: "New Major" };
      const mockCreatedMajor = { id: 3, ...mockMajor };
      Carrera.create.mockResolvedValue(mockCreatedMajor);

      const result = await majorService.create(mockMajor);

      expect(result).toEqual(mockCreatedMajor);
      expect(Carrera.create).toHaveBeenCalledWith(mockMajor);
      expect(contentValidator).toHaveBeenCalledWith(mockCreatedMajor);
    });

    it("should throw an error if Carrera.create fails", async () => {
      const mockMajor = { name: "New Major" };
      const errorMessage = "Error creating major";
      Carrera.create.mockRejectedValue(new Error(errorMessage));

      await expect(majorService.create(mockMajor)).rejects.toThrow(
        errorMessage,
      );
    });
  });

  describe("update", () => {
    it("should update a major by ID", async () => {
      const mockId = 1;
      const mockMajor = { name: "Updated Major" };
      // eslint-disable-next-line no-unused-vars
      const mockUpdateMajor = { id: mockId, ...mockMajor };
      Carrera.update.mockResolvedValue([1]); // Indica que se actualizó 1 registro

      const result = await majorService.update(mockId, mockMajor);

      expect(result).toEqual([1]);
      expect(Carrera.update).toHaveBeenCalledWith(mockMajor, {
        where: { id: mockId },
      });
      expect(contentValidator).toHaveBeenCalledWith([1]);
    });

    it("should throw an error if Carrera.update fails", async () => {
      const mockId = 1;
      const mockMajor = { name: "Updated Major" };
      const errorMessage = "Error updating major";
      Carrera.update.mockRejectedValue(new Error(errorMessage));

      await expect(majorService.update(mockId, mockMajor)).rejects.toThrow(
        errorMessage,
      );
    });
  });

  describe("destroy", () => {
    it("should delete a major by ID", async () => {
      const mockId = 1;
      Carrera.destroy.mockResolvedValue(1); // Indica que se eliminó 1 registro

      const result = await majorService.destroy(mockId);

      expect(result).toEqual(1);
      expect(Carrera.destroy).toHaveBeenCalledWith({ where: { id: mockId } });
      expect(contentValidator).toHaveBeenCalledWith(1);
    });

    it("should throw an error if Carrera.destroy fails", async () => {
      const mockId = 1;
      const errorMessage = "Error deleting major";
      Carrera.destroy.mockRejectedValue(new Error(errorMessage));

      await expect(majorService.destroy(mockId)).rejects.toThrow(errorMessage);
    });
  });

  describe("searchPlanByCarreraId", () => {
    it("should return plan de estudio for a major by ID", async () => {
      const mockId = 1;
      const mockMajor = { id: mockId, name: "Major1" };
      const mockPlanEstudio = { id: 1, name: "Plan1" };
      Carrera.findOne.mockResolvedValue({
        ...mockMajor,
        PlanEstudios: [mockPlanEstudio],
      });

      const result = await majorService.searchPlanByCarreraId(mockId);

      expect(result).toEqual({ ...mockMajor, PlanEstudios: [mockPlanEstudio] });
      expect(Carrera.findOne).toHaveBeenCalledWith({
        where: { id: mockId },
        include: { model: PlanEstudio, through: { model: CarreraPlanEstudio } },
      });
      expect(contentValidator).toHaveBeenCalledWith({
        ...mockMajor,
        PlanEstudios: [mockPlanEstudio],
      });
    });

    it("should throw an error if Carrera.findOne fails", async () => {
      const mockId = 1;
      const errorMessage = "Error searching plan de estudio by major ID";
      Carrera.findOne.mockRejectedValue(new Error(errorMessage));

      await expect(majorService.searchPlanByCarreraId(mockId)).rejects.toThrow(
        errorMessage,
      );
    });
  });
});
