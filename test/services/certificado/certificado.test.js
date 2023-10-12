const certificateService = require("../../../src/services/certificado/certificado");

jest.mock("../../../src/models/certificado/certificado", () => ({
  findAll: jest.fn(),
  findByPk: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));

jest.mock("../../../src/utils/contentValidator", () => jest.fn());

describe("certificateService", () => {
  const mockCertificate = { id: 1, name: "Cert1" };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    it("should return all certificates", async () => {
      const mockCertificates = [mockCertificate];
      const findAllMock = jest.fn(() => mockCertificates);
      require("../../../src/models/certificado/certificado").findAll =
        findAllMock;

      const result = await certificateService.getAll();

      expect(result).toEqual(mockCertificates);
      expect(findAllMock).toHaveBeenCalledTimes(1);
      expect(
        require("../../../src/utils/contentValidator"),
      ).toHaveBeenCalledWith(mockCertificates);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Something went wrong");
      require("../../../src/models/certificado/certificado").findAll = jest.fn(
        () => {
          throw error;
        },
      );

      try {
        await certificateService.getAll();
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("getById", () => {
    it("should return a certificate by id", async () => {
      const findByIdMock = jest.fn(() => mockCertificate);
      require("../../../src/models/certificado/certificado").findByPk =
        findByIdMock;

      const result = await certificateService.getById(1);

      expect(result).toEqual(mockCertificate);
      expect(findByIdMock).toHaveBeenCalledWith(1);
      expect(
        require("../../../src/utils/contentValidator"),
      ).toHaveBeenCalledWith(mockCertificate);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Something went wrong");
      require("../../../src/models/certificado/certificado").findByPk = jest.fn(
        () => {
          throw error;
        },
      );

      try {
        await certificateService.getById(1);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("create", () => {
    it("should create a new certificate", async () => {
      const createCertificateMock = jest.fn(() => mockCertificate);
      require("../../../src/models/certificado/certificado").create =
        createCertificateMock;

      const result = await certificateService.create(mockCertificate);

      expect(result).toEqual(mockCertificate);
      expect(createCertificateMock).toHaveBeenCalledWith(mockCertificate);
      expect(
        require("../../../src/utils/contentValidator"),
      ).toHaveBeenCalledWith(mockCertificate);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Something went wrong");
      require("../../../src/models/certificado/certificado").create = jest.fn(
        () => {
          throw error;
        },
      );

      try {
        await certificateService.create(mockCertificate);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("update", () => {
    it("should update a certificate", async () => {
      const updateCertificateMock = jest.fn(() => [1]);
      require("../../../src/models/certificado/certificado").update =
        updateCertificateMock;

      const result = await certificateService.update(1, mockCertificate);

      expect(result).toEqual([1]);
      expect(updateCertificateMock).toHaveBeenCalledWith(
        {
          certificate: mockCertificate,
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
      const error = new Error("Something went wrong");
      require("../../../src/models/certificado/certificado").update = jest.fn(
        () => {
          throw error;
        },
      );

      try {
        await certificateService.update(1, mockCertificate);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("destroy", () => {
    it("should destroy a certificate", async () => {
      const destroyCertificateMock = jest.fn(() => 1);
      require("../../../src/models/certificado/certificado").destroy =
        destroyCertificateMock;

      const result = await certificateService.destroy(1);

      expect(result).toEqual(1);
      expect(destroyCertificateMock).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(
        require("../../../src/utils/contentValidator"),
      ).toHaveBeenCalledWith(1);
    });

    it("should throw an error if there is an error", async () => {
      const error = new Error("Something went wrong");
      require("../../../src/models/certificado/certificado").destroy = jest.fn(
        () => {
          throw error;
        },
      );

      try {
        await certificateService.destroy(1);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });
});
