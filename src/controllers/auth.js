const bcrypt = require("bcryptjs");
const { config } = require("dotenv");
const jwt = require("jsonwebtoken");
const userService = require("../services/user");
const handleErrorController = require("../utils/handleErrorController");
const reqValidatorContent = require("../utils/reqValidatorContent");

config();

const register = async (req, res) => {
  try {
    const { bodyData } = req.body;
    reqValidatorContent(bodyData);
    const { username, password } = bodyData;
    await userService.findExist(username);
    bodyData.password = bcrypt.hashSync(password, 10);
    const create = await userService.create(bodyData);
    return res.status(200).json(create);
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const login = async (req, res) => {
  try {
    const { bodyData } = req.body;
    reqValidatorContent(bodyData);
    const { username, password, rol, nombreCompleto: nombre } = bodyData;
    const { password: contra } = await userService.validatePassword(username);
    const validate = bcrypt.compareSync(password, contra);
    const token = jwt.sign({ username, rol, nombre }, process.env.JWT_KEY);
    if (validate) {
      return res.status(200).json({
        data: { token },
      });
    }
    return res.status(200).json(validate);
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const forgotPassword = (req, res) => {
  try {
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

// const forgotPassword = (req, res) => {
//   try {
//   } catch (err) {
//     handleErrorController(err.message, res);
//   }
// };

const authController = {
  register,
  login,
  forgotPassword,
};

module.exports = authController;
