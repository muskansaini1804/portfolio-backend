const jwt = require("jsonwebtoken");
const RegisterModal = require("../models/register");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await RegisterModal.findOne({ email });
    if (!user) {
      return res.send({ message: "User not found" });
    }
  
    if (user.password !== password) {
      return res.send({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { id: user._id, email: user.email },
      "Radialcode",
      {
        expiresIn: "30d",
      
      }
    );
    return res.send({ message: "Login successfully", token, user });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send({ error: "Failed to login" });
  }
};
