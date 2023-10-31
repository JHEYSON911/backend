const institutionService = require("../../../../src/services/institucion/institucion");
const Institucion = require("../../../../src/models/institucion/institucion.js");
const contentValidator = require("../../../../src/utils/contentValidator.js");

jest.mock("../../../../src/models/institucion/institucion.js"); // Mockeamos el modelo Institucion
jest.mock("../../../../src/utils/contentValidator.js"); // Mockeamos la función contentValidator

describe("institutionService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should return all institutions", async () => {
      const mockInstitutions = [
        { id: 1, name: "Institution1" },
        { id: 2, name: "Institution2" },
      ];
      Institucion.findAll.mockResolvedValue(mockInstitutions);

      const result = await institutionService.getAll();

      expect(result).toEqual(mockInstitutions);
      expect(Institucion.findAll).toHaveBeenCalled();
      expect(contentValidator).toHaveBeenCalledWith(mockInstitutions);
    });

    it("should throw an error if Institucion.findAll fails", async () => {
      const errorMessage = "Error fetching institutions";
      Institucion.findAll.mockRejectedValue(new Error(errorMessage));

      await expect(institutionService.getAll()).rejects.toThrow(errorMessage);
    });
  });

  describe("getById", () => {
    it("should return an institution by ID", async () => {
      const mockId = 1;
      const mockInstitution = { id: mockId, name: "Institution1" };
      Institucion.findByPk.mockResolvedValue(mockInstitution);

      const result = await institutionService.getById(mockId);

      expect(result).toEqual(mockInstitution);
      expect(Institucion.findByPk).toHaveBeenCalledWith(mockId);
      expect(contentValidator).toHaveBeenCalledWith(mockInstitution);
    });

    it("should throw an error if Institucion.findByPk fails", async () => {
      const mockId = 1;
      const errorMessage = "Error fetching institution by ID";
      Institucion.findByPk.mockRejectedValue(new Error(errorMessage));

      await expect(institutionService.getById(mockId)).rejects.toThrow(
        errorMessage,
      );
    });
  });

  describe("create", () => {
    it("should create a new institution", async () => {
      const mockInstitution = { name: "New Institution" };
      const mockCreatedInstitution = { id: 3, ...mockInstitution };
      Institucion.create.mockResolvedValue(mockCreatedInstitution);

      const result = await institutionService.create(mockInstitution);

      expect(result).toEqual(mockCreatedInstitution);
      expect(Institucion.create).toHaveBeenCalledWith(mockInstitution);
      expect(contentValidator).toHaveBeenCalledWith(mockCreatedInstitution);
    });

    it("should throw an error if Institucion.create fails", async () => {
      const mockInstitution = { name: "New Institution" };
      const errorMessage = "Error creating institution";
      Institucion.create.mockRejectedValue(new Error(errorMessage));

      await expect(institutionService.create(mockInstitution)).rejects.toThrow(
        errorMessage,
      );
    });
  });

  describe("update", () => {
    it("should update an institution by ID", async () => {
      const mockId = 1;
      const mockInstitution = { name: "Updated Institution" };
      // eslint-disable-next-line no-unused-vars
      const mockUpdateInstitution = { id: mockId, ...mockInstitution };
      Institucion.update.mockResolvedValue([1]); // Indica que se actualizó 1 registro

      const result = await institutionService.update(mockId, mockInstitution);

      expect(result).toEqual([1]);
      expect(Institucion.update).toHaveBeenCalledWith(mockInstitution, {
        where: { id: mockId },
      });
      expect(contentValidator).toHaveBeenCalledWith([1]);
    });

    it("should throw an error if Institucion.update fails", async () => {
      const mockId = 1;
      const mockInstitution = { name: "Updated Institution" };
      const errorMessage = "Error updating institution";
      Institucion.update.mockRejectedValue(new Error(errorMessage));

      await expect(
        institutionService.update(mockId, mockInstitution),
      ).rejects.toThrow(errorMessage);
    });
  });

  describe("destroy", () => {
    it("should delete an institution by ID", async () => {
      const mockId = 1;
      Institucion.destroy.mockResolvedValue(1); // Indica que se eliminó 1 registro

      const result = await institutionService.destroy(mockId);

      expect(result).toEqual(1);
      expect(Institucion.destroy).toHaveBeenCalledWith({
        where: { id: mockId },
      });
      expect(contentValidator).toHaveBeenCalledWith(1);
    });

    it("should throw an error if Institucion.destroy fails", async () => {
      const mockId = 1;
      const errorMessage = "Error deleting institution";
      Institucion.destroy.mockRejectedValue(new Error(errorMessage));

      await expect(institutionService.destroy(mockId)).rejects.toThrow(
        errorMessage,
      );
    });
  });
});
