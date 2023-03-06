import models from '../db/models';
import bcrypt from 'bcrypt';
const { user } = models;

function validateUserCredentials(credentials) {
  const username = credentials.username;
  const email = credentials.email;
  const password = credentials.password;

  if (!username || !email || !password) {
    throw new Error('All fields are required!');
  }
  if (username.length < 4) {
    throw new Error('The username must contain at elast 4 characters');
  }
  if (!email.includes('@')) {
    throw new Error('The email must be valid email');
  }
  if (password.length < 8) {
    throw new Error('The password must be at least 8 characters long');
  }
  if (!password.match(/[!@#$%^&*]/) || !password.match(/[0-9]/)) {
    throw new Error(
      'The password must contain at least one special character and at least one number'
    );
  }
}

const createUser = async (newUserInfo) => {
  try {
    validateUserCredentials(newUserInfo);
  } catch (error) {
    return { error: true, message: error.message };
  }

  const dbUser = await user.findOne({
    where: {
      email: newUserInfo.email,
    },
  });

  if (dbUser) {
    return { error: 'Email already in use' };
  } else {
    newUserInfo.password = await bcrypt.hash(newUserInfo.password, 10);
    try {
      await user.create(newUserInfo);
      return { error: false, message: 'Registration successful' };
    } catch (error) {
      return { error: true, message: { error } };
    }
  }
};

export default {
  validateUserCredentials,
  createUser,
};
