const workerService = require("../../../src/services/trabajador");
const Trabajador = require("../../../src/models/trabajador");
const contentValidator = require("../../../src/utils/contentValidator");

jest.mock("../../../src/models/trabajador"); // Mockeamos el modelo Trabajador
jest.mock("../../../src/utils/contentValidator"); // Mockeamos la función contentValidator

describe("workerService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should return all workers", async () => {
      const mockWorkers = [
        { id: 1, name: "Worker1" },
        { id: 2, name: "Worker2" },
      ];
      Trabajador.findAll.mockResolvedValue(mockWorkers);

      const result = await workerService.getAll();

      expect(result).toEqual(mockWorkers);
      expect(Trabajador.findAll).toHaveBeenCalled();
      expect(contentValidator).toHaveBeenCalledWith(mockWorkers);
    });

    it("should throw an error if Trabajador.findAll fails", async () => {
      const errorMessage = "Error fetching workers";
      Trabajador.findAll.mockRejectedValue(new Error(errorMessage));

      await expect(workerService.getAll()).rejects.toThrow(errorMessage);
    });
  });

  describe("getById", () => {
    it("should return a worker by ID", async () => {
      const mockId = 1;
      const mockWorker = { id: mockId, name: "Worker1" };
      Trabajador.findByPk.mockResolvedValue(mockWorker);

      const result = await workerService.getById(mockId);

      expect(result).toEqual(mockWorker);
      expect(Trabajador.findByPk).toHaveBeenCalledWith(mockId);
      expect(contentValidator).toHaveBeenCalledWith(mockWorker);
    });

    it("should throw an error if Trabajador.findByPk fails", async () => {
      const mockId = 1;
      const errorMessage = "Error fetching worker by ID";
      Trabajador.findByPk.mockRejectedValue(new Error(errorMessage));

      await expect(workerService.getById(mockId)).rejects.toThrow(errorMessage);
    });
  });

  describe("create", () => {
    it("should create a new worker", async () => {
      const mockWorker = { name: "New Worker" };
      const mockCreatedWorker = { id: 3, ...mockWorker };
      Trabajador.create.mockResolvedValue(mockCreatedWorker);

      const result = await workerService.create(mockWorker);

      expect(result).toEqual(mockCreatedWorker);
      expect(Trabajador.create).toHaveBeenCalledWith(mockWorker);
      expect(contentValidator).toHaveBeenCalledWith(mockCreatedWorker);
    });

    it("should throw an error if Trabajador.create fails", async () => {
      const mockWorker = { name: "New Worker" };
      const errorMessage = "Error creating worker";
      Trabajador.create.mockRejectedValue(new Error(errorMessage));

      await expect(workerService.create(mockWorker)).rejects.toThrow(
        errorMessage,
      );
    });
  });

  describe("update", () => {
    it("should update a worker by ID", async () => {
      const mockId = 1;
      const mockWorker = { name: "Updated Worker" };
      // eslint-disable-next-line no-unused-vars
      const mockUpdateWorker = { id: mockId, ...mockWorker };
      Trabajador.update.mockResolvedValue([1]); // Indica que se actualizó 1 registro

      const result = await workerService.update(mockId, mockWorker);

      expect(result).toEqual([1]);
      expect(Trabajador.update).toHaveBeenCalledWith(mockWorker, {
        where: { id: mockId },
      });
      expect(contentValidator).toHaveBeenCalledWith([1]);
    });

    it("should throw an error if Trabajador.update fails", async () => {
      const mockId = 1;
      const mockWorker = { name: "Updated Worker" };
      const errorMessage = "Error updating worker";
      Trabajador.update.mockRejectedValue(new Error(errorMessage));

      await expect(workerService.update(mockId, mockWorker)).rejects.toThrow(
        errorMessage,
      );
    });
  });

  describe("destroy", () => {
    it("should delete a worker by ID", async () => {
      const mockId = 1;
      Trabajador.destroy.mockResolvedValue(1); // Indica que se eliminó 1 registro

      const result = await workerService.destroy(mockId);

      expect(result).toEqual(1);
      expect(Trabajador.destroy).toHaveBeenCalledWith({
        where: { id: mockId },
      });
      expect(contentValidator).toHaveBeenCalledWith(1);
    });

    it("should throw an error if Trabajador.destroy fails", async () => {
      const mockId = 1;
      const errorMessage = "Error deleting worker";
      Trabajador.destroy.mockRejectedValue(new Error(errorMessage));

      await expect(workerService.destroy(mockId)).rejects.toThrow(errorMessage);
    });
  });
});
