const User = require("../models/user"); // Correct the model import
const bcrypt = require ('bcrypt')
const jwt = require("jsonwebtoken");
const user = require("../models/user");

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    
    // Use await when checking for an existing user
    const foundUser = await User.findOne({ email }); // Correct the model name to "User"

    if (foundUser) {
      return res.status(400).json({ errors: [{ msg: 'Email already in use!' }] });
    }

    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create a new User instance and save it to the database
    const newUser = new User({ name, email, password, phone });

    newUser.password = hashedPassword

    await newUser.save();

    const token = jwt.sign(
    {id: newUser._id},
    process.env.SECRET_KEY)

    // Respond with a success message and the newly registered user
    res.status(200).json({ success: [{ msg: 'Registered successfully', newUser,token }] });
  } catch (error) {
    // Handle any errors that occur during registration
    res.status(400).json({ errors: [{ msg: 'Registration failed' }] });
  }
};

//login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await user.findOne({ email });

    if (!foundUser) {
      console.log("Email not found:", email);
      return res.status(400).send({ errors: [{ msg: 'Email incorrect' }] });
    }

    const checkPassword = await bcrypt.compare(password, foundUser.password);

    if (!checkPassword) {
      console.log("Incorrect password for email:", email);
      return res.status(400).send({ errors: [{ msg: 'Password incorrect' }] });
    }

    const token = jwt.sign(
      { id: foundUser._id },
      process.env.SECRET_KEY
    );

    console.log("Logged in user:", foundUser.email);
    res.status(200).send({ success: [{ msg: 'Login successful. Welcome back!', foundUser, token }] });
  } catch (error) {
    console.error("Login error:", error);
    res.status(400).json({ errors: [{ msg: 'Login failed' }] });
  }
};

