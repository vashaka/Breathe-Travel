const User = require("../models/user");

exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;
  const userDoc = new User({ name, email, password });
  userDoc
    .save()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
};
