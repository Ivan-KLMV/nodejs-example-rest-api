const User = require('../../models/userModel');

exports.changeUserSubscription = async (req, res) => {
  try {
    const subscriptionType = ['starter', 'pro', 'business'];
    const newSubscription = req.body.subscription;
    const { email, subscription } = req.user;

    const isSubscriptionValid = subscriptionType.some(
      (item) => item === newSubscription
    );

    if (!isSubscriptionValid) {
      return res
        .status(400)
        .json({ message: `subscription "${newSubscription}" does not exist` });
    }

    if (newSubscription === subscription) {
      return res.status(200).json({
        message: `You already have a "${newSubscription}" subscription`,
      });
    }

    await User.updateOne({ email }, { subscription: newSubscription });

    res.status(200).json({
      message: `Your subscription has been successfully updated to "${newSubscription}"`,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
