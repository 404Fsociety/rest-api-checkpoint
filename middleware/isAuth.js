const jwt = require('jsonwebtoken');
const User = require('../models/user');

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(400).send({ errors: [{ msg: 'Not authorized. Token not found.' }] });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Use await to get the user based on the decoded id
    const foundUser = await User.findOne({ _id: decoded.id });

    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: 'Not authorized. User not found.' }] });
    }

    // Attach the user object to the request
    req.user = foundUser;
    next();
  } catch (error) {
    return res.status(400).send({ errors: [{ msg: 'Not authorized.' }] });
  }
};

module.exports = isAuth;
