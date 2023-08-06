exports.getMe = async (req, res) => {
  try {
    const { email, subscription } = req.user;

    res.status(200).json({ email, subscription });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
