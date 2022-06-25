import connectMongo from "lib/connectMongo";
import handleError from "lib/handleError";
import User from 'models/User';
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET_KEY;

const getUser = async (req, res)=> {
  const user = await User.create({});
  const token = jwt.sign(JSON.stringify(user), secretKey);
  return res.json({token});
}

export default async (req, res)=> {
  try {
    await connectMongo();

    switch (req.method) {
      case "GET": return await getUser(req, res);
    }

  }catch(error) {
    handleError(error, req, res, true);
  }
}