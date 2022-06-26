import connectMongo from "lib/connectMongo";

export default async (req, res)=> {

  return res.json({mongo: process.MONGO_URL});
}