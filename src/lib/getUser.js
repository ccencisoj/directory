import jwt from 'jsonwebtoken';
import UserError from 'errors/UserError';

const secretKey = process.env.JWT_SECRET_KEY;

const getUser = async (req)=> {
  const token = req.body.token;
  let user = {};
  
  try {
    user = jwt.verify(token, secretKey);

  }catch(error) {
    throw new UserError("the user token is invalid");
  }

  return user;
}

export default getUser;