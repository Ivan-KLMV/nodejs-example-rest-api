const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');

const { EMAIL_REGEXP } = require('../constants/EMAIL_REGEXP');

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      match: EMAIL_REGEXP,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: String,
    avatarURL: String,
  },
  { timestamps: true, versionKey: false }
);

/**
 * Pre save mongoose hook. Fires on Create and Save. */
userSchema.pre('save', async function (next) {
  if (this.isNew) {
    this.avatarURL = gravatar.url(
      this.email,
      {
        s: '250',
        d: 'robohash',
      },
      true
    );
  }

  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

userSchema.methods.checkPassword = (candidate, hash) =>
  bcrypt.compare(candidate, hash);

const User = model('User', userSchema);

module.exports = User;
