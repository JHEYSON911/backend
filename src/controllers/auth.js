const bcrypt = require("bcryptjs");
const { config } = require("dotenv");
const jwt = require("jsonwebtoken");
const userService = require("../services/user");
const handleErrorController = require("../utils/handleErrorController");
const reqValidatorContent = require("../utils/reqValidatorContent");
const transporter = require("../utils/mailer");

config();

const compareCodeRecovery = async (code, username) => {
  try {
    const compare = await userService.findUser(username);
    if (compare.recoveryCode !== code) {
      throw new Error("Code Incorrect");
    }
  } catch (err) {
    throw err;
  }
};
const generateCodeRecovery = async (username) => {
  try {
    const longitud = 6;
    let codigo = "";

    for (let i = 0; i < longitud; i++) {
      const digito = Math.floor(Math.random() * 10); // Números aleatorios del 0 al 9
      codigo += digito.toString();
    }
    await userService.generateCodeRecovery(codigo, username);
    return codigo;
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const validateCodeRecovery = async (req, res) => {
  try {
    const { code, username } = req.body;
    await compareCodeRecovery(code, username);
    return res.status(200).json({ data: { message: "Codigo Correcto" } });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

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
    const { username, password } = bodyData;
    const user = await userService.findUser(username);
    const validate = bcrypt.compareSync(password, user.password);
    if (!validate) {
      throw new Error("Invalid password");
    }
    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
      nombre: user.nombreCompleto,
    };
    const token = jwt.sign(payload, process.env.JWT_KEY);
    return res.status(200).json({ data: token });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { bodyData } = req.body;
    const { username } = bodyData;
    const { email } = await userService.findUser(username);
    const codigo = await generateCodeRecovery(bodyData.username);
    const message = {
      from: `OFICINA DE ISTAT ${process.env.EMAIL_USER}`,
      to: email,
      subject: "Codigo de Recuperacion de contraseña",
      text: "Plaintext version of the message",
      html: `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Código de Recuperación</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .logo-container {
            text-align: center;
            margin-bottom: 20px;
        }

        .logo {
            max-width: 100%;
            height: auto;
        }

        .message {
            text-align: center;
            color: #333333;
        }

        .code {
            font-size: 24px;
            font-weight: bold;
            color: #009688;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo-container">
            <img class="logo" src="https://www.istat.edu.pe/wp-content/uploads/2022/05/LogoIST.png" alt="Logo IST">
        </div>
        <div class="message">
            <p>Código de recuperación:</p>
            <p class="code">${codigo}</p> <!-- Aquí reemplaza "123456" con el código generado dinámicamente -->
        </div>
    </div>
</body>
</html>`,
    };
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      }
    });
    return res.status(200).json({
      data: { message: "Codigo enviado con exito " + codigo },
    });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};
const changePassword = async (req, res) => {
  try {
    const { password, username } = req.body;
    const newPassword = bcrypt.hashSync(password, 10);
    const change = await userService.updatePassword(newPassword, username);
    return res.status(200).json({ data: change });
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
  generateCodeRecovery,
  validateCodeRecovery,
  changePassword,
};

module.exports = authController;
