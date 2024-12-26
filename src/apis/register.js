const RegisterModal = require("../models/register");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    } = req.body;
    const registerUser = new RegisterModal({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });

    const token = jwt.sign(
      { firstName, lastName, email, phoneNumber },
      "Radialcode",
      { expiresIn: "30d" }
    );

    await registerUser.save();
    return res.send({
      message: "User registered successfully!",
      token,
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send({ error: "Already Existed" });
  }
};
