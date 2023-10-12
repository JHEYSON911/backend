const auxiliaryTypeService = require("../../../src/services/certificado/tipo_auxiliar");

jest.mock("../../../src/models/certificado/tipo_auxiliar", () => ({
  findAll: jest.fn(),
  findByPk: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));

jest.mock("../../../src/utils/contentValidator", () => jest.fn());

describe("auxiliaryTypeService", () => {
  const mockAuxiliaryType = { id: 1, name: "AuxType1" };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should return all auxiliary types", async () => {
      const mockAuxiliaryTypes = [mockAuxiliaryType];
      const findAllMock = jest.fn(() => mockAuxiliaryTypes);
      require("../../../src/models/certificado/tipo_auxiliar").findAll =
        findAllMock;

      const result = await auxiliaryTypeService.getAll();

      expect(result).toEqual(mockAuxiliaryTypes);
      expect(findAllMock).toHaveBeenCalledTimes(1);
      expect(
        require("../../../src/utils/contentValidator"),
      ).toHaveBeenCalledWith(mockAuxiliaryTypes);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Algo salió mal");
      require("../../../src/models/certificado/tipo_auxiliar").findAll =
        jest.fn(() => {
          throw error;
        });

      try {
        await auxiliaryTypeService.getAll();
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("getById", () => {
    it("should return an auxiliary type by id", async () => {
      const findByIdMock = jest.fn(() => mockAuxiliaryType);
      require("../../../src/models/certificado/tipo_auxiliar").findByPk =
        findByIdMock;

      const result = await auxiliaryTypeService.getById(1);

      expect(result).toEqual(mockAuxiliaryType);
      expect(findByIdMock).toHaveBeenCalledWith(1);
      expect(
        require("../../../src/utils/contentValidator"),
      ).toHaveBeenCalledWith(mockAuxiliaryType);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Algo salió mal");
      require("../../../src/models/certificado/tipo_auxiliar").findByPk =
        jest.fn(() => {
          throw error;
        });

      try {
        await auxiliaryTypeService.getById(1);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("create", () => {
    it("should create a new auxiliary type", async () => {
      const createAuxiliaryTypeMock = jest.fn(() => mockAuxiliaryType);
      require("../../../src/models/certificado/tipo_auxiliar").create =
        createAuxiliaryTypeMock;

      const result = await auxiliaryTypeService.create(mockAuxiliaryType);

      expect(result).toEqual(mockAuxiliaryType);
      expect(createAuxiliaryTypeMock).toHaveBeenCalledWith(mockAuxiliaryType);
      expect(
        require("../../../src/utils/contentValidator"),
      ).toHaveBeenCalledWith(mockAuxiliaryType);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Algo salió mal");
      require("../../../src/models/certificado/tipo_auxiliar").create = jest.fn(
        () => {
          throw error;
        },
      );

      try {
        await auxiliaryTypeService.create(mockAuxiliaryType);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("update", () => {
    it("should update an auxiliary type", async () => {
      const updateAuxiliaryTypeMock = jest.fn(() => [1]);
      require("../../../src/models/certificado/tipo_auxiliar").update =
        updateAuxiliaryTypeMock;

      const result = await auxiliaryTypeService.update(1, mockAuxiliaryType);

      expect(result).toEqual([1]);
      expect(updateAuxiliaryTypeMock).toHaveBeenCalledWith(
        {
          auxiliaryType: mockAuxiliaryType,
        },
        {
          where: { id: 1 },
        },
      );
      expect(
        require("../../../src/utils/contentValidator"),
      ).toHaveBeenCalledWith([1]);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Algo salió mal");
      require("../../../src/models/certificado/tipo_auxiliar").update = jest.fn(
        () => {
          throw error;
        },
      );

      try {
        await auxiliaryTypeService.update(1, mockAuxiliaryType);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("destroy", () => {
    it("should destroy an auxiliary type", async () => {
      const destroyAuxiliaryTypeMock = jest.fn(() => 1);
      require("../../../src/models/certificado/tipo_auxiliar").destroy =
        destroyAuxiliaryTypeMock;

      const result = await auxiliaryTypeService.destroy(1);

      expect(result).toEqual(1);
      expect(destroyAuxiliaryTypeMock).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(
        require("../../../src/utils/contentValidator"),
      ).toHaveBeenCalledWith(1);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Algo salió mal");
      require("../../../src/models/certificado/tipo_auxiliar").destroy =
        jest.fn(() => {
          throw error;
        });

      try {
        await auxiliaryTypeService.destroy(1);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });
});
