import * as bcrypt from 'bcrypt';

const hashPassword = (password: string): string => {
  return bcrypt.hashSync(password, 8);
};

export default hashPassword;
