export const jwtConfig = {
  secret: process.env.JWT_SECRET,
  expireIn: process.env.JWT_TOKEN_EXPIRE_IN,
};
