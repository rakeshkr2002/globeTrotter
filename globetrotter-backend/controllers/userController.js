const User = require('../models/user');

exports.registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

exports.submitAnswer = async (req, res) => {
  const { userId, answer, isCorrect } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $inc: { score: isCorrect ? 1 : -1 } },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting answer', error });
  }
};