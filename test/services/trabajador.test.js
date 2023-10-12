const workerService = require("../../src/services/trabajador.js");

jest.mock("../../src/models/trabajador", () => ({
  findAll: jest.fn(),
  findByPk: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));

jest.mock("../../src/utils/contentValidator", () => jest.fn());

describe("workerService", () => {
  const mockWorker = { id: 1, name: "John Doe" };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should return all workers", async () => {
      const mockWorkers = [mockWorker];
      const findAllMock = jest.fn(() => mockWorkers);
      require("../../src/models/trabajador").findAll = findAllMock;

      const result = await workerService.getAll();

      expect(result).toEqual(mockWorkers);
      expect(findAllMock).toHaveBeenCalledTimes(1);
      expect(require("../../src/utils/contentValidator")).toHaveBeenCalledWith(
        mockWorkers,
      );
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Something went wrong");
      require("../../src/models/trabajador").findAll = jest.fn(() => {
        throw error;
      });

      try {
        await workerService.getAll();
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("getById", () => {
    it("should return a worker by id", async () => {
      const findByIdMock = jest.fn(() => mockWorker);
      require("../../src/models/trabajador").findByPk = findByIdMock;

      const result = await workerService.getById(1);

      expect(result).toEqual(mockWorker);
      expect(findByIdMock).toHaveBeenCalledWith(1);
      expect(require("../../src/utils/contentValidator")).toHaveBeenCalledWith(
        mockWorker,
      );
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Something went wrong");
      require("../../src/models/trabajador").findByPk = jest.fn(() => {
        throw error;
      });

      try {
        await workerService.getById(1);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("create", () => {
    it("should create a new worker", async () => {
      const createWorkerMock = jest.fn(() => mockWorker);
      require("../../src/models/trabajador").create = createWorkerMock;

      const result = await workerService.create(mockWorker);

      expect(result).toEqual(mockWorker);
      expect(createWorkerMock).toHaveBeenCalledWith(mockWorker);
      expect(require("../../src/utils/contentValidator")).toHaveBeenCalledWith(
        mockWorker,
      );
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Something went wrong");
      require("../../src/models/trabajador").create = jest.fn(() => {
        throw error;
      });

      try {
        await workerService.create(mockWorker);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("update", () => {
    it("should update a worker", async () => {
      const updateWorkerMock = jest.fn(() => [1]);
      require("../../src/models/trabajador").update = updateWorkerMock;

      const result = await workerService.update(1, mockWorker);

      expect(result).toEqual([1]);
      expect(updateWorkerMock).toHaveBeenCalledWith(
        { worker: mockWorker },
        { where: { id: 1 } },
      );
      expect(require("../../src/utils/contentValidator")).toHaveBeenCalledWith([
        1,
      ]);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Something went wrong");
      require("../../src/models/trabajador").update = jest.fn(() => {
        throw error;
      });

      try {
        await workerService.update(1, mockWorker);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("destroy", () => {
    it("should destroy a worker", async () => {
      const destroyWorkerMock = jest.fn(() => 1);
      require("../../src/models/trabajador").destroy = destroyWorkerMock;

      const result = await workerService.destroy(1);

      expect(result).toEqual(1);
      expect(destroyWorkerMock).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(require("../../src/utils/contentValidator")).toHaveBeenCalledWith(
        1,
      );
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Something went wrong");
      require("../../src/models/trabajador").destroy = jest.fn(() => {
        throw error;
      });

      try {
        await workerService.destroy(1);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });
});
