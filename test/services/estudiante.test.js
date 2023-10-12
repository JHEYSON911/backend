const estudianteService = require("../../src/services/estudiante");

jest.mock("../../src/models/estudiante", () => ({
  findAll: jest.fn(),
  findByPk: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));

jest.mock("../../src/utils/contentValidator", () => jest.fn());

describe("estudianteService", () => {
  const mockEstudiante = { id: 1, name: "John Doe" };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should return all students", async () => {
      const mockStudents = [mockEstudiante];
      const findAllMock = jest.fn(() => mockStudents);
      require("../../src/models/estudiante").findAll = findAllMock;

      const result = await estudianteService.getAll();

      expect(result).toEqual(mockStudents);
      expect(findAllMock).toHaveBeenCalledTimes(1);
      expect(require("../../src/utils/contentValidator")).toHaveBeenCalledWith(
        mockStudents,
      );
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Algo salió mal");
      require("../../src/models/estudiante").findAll = jest.fn(() => {
        throw error;
      });

      try {
        await estudianteService.getAll();
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("getById", () => {
    it("should return a student by id", async () => {
      const findByIdMock = jest.fn(() => mockEstudiante);
      require("../../src/models/estudiante").findByPk = findByIdMock;

      const result = await estudianteService.getById(1);

      expect(result).toEqual(mockEstudiante);
      expect(findByIdMock).toHaveBeenCalledWith(1);
      expect(require("../../src/utils/contentValidator")).toHaveBeenCalledWith(
        mockEstudiante,
      );
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Algo salió mal");
      require("../../src/models/estudiante").findByPk = jest.fn(() => {
        throw error;
      });

      try {
        await estudianteService.getById(1);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("create", () => {
    it("should create a new student", async () => {
      const createStudentMock = jest.fn(() => mockEstudiante);
      require("../../src/models/estudiante").create = createStudentMock;

      const result = await estudianteService.create(mockEstudiante);

      expect(result).toEqual(mockEstudiante);
      expect(createStudentMock).toHaveBeenCalledWith(mockEstudiante);
      expect(require("../../src/utils/contentValidator")).toHaveBeenCalledWith(
        mockEstudiante,
      );
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Algo salió mal");
      require("../../src/models/estudiante").create = jest.fn(() => {
        throw error;
      });

      try {
        await estudianteService.create(mockEstudiante);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("update", () => {
    it("should update a student", async () => {
      const updateStudentMock = jest.fn(() => [1]);
      require("../../src/models/estudiante").update = updateStudentMock;

      const result = await estudianteService.update(1, mockEstudiante);

      expect(result).toEqual([1]);
      expect(updateStudentMock).toHaveBeenCalledWith(
        { student: mockEstudiante },
        {
          where: { id: 1 },
        },
      );
      expect(require("../../src/utils/contentValidator")).toHaveBeenCalledWith([
        1,
      ]);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Algo salió mal");
      require("../../src/models/estudiante").update = jest.fn(() => {
        throw error;
      });

      try {
        await estudianteService.update(1, mockEstudiante);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("destroy", () => {
    it("should destroy a student", async () => {
      const destroyStudentMock = jest.fn(() => 1);
      require("../../src/models/estudiante").destroy = destroyStudentMock;

      const result = await estudianteService.destroy(1);

      expect(result).toEqual(1);
      expect(destroyStudentMock).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(require("../../src/utils/contentValidator")).toHaveBeenCalledWith(
        1,
      );
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Algo salió mal");
      require("../../src/models/estudiante").destroy = jest.fn(() => {
        throw error;
      });

      try {
        await estudianteService.destroy(1);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });
});
