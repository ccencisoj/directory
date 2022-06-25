import connectMongo from "lib/connectMongo";
import Directory from "models/Directory";
import getUser from 'lib/getUser';
import handleError from "lib/handleError";

export default async (req, res)=> {
  try {
    await connectMongo();

    const user = await getUser(req);
    const results = await Directory.find({user: user.id});

    return res.json({directories: results});

  }catch(error) {
    handleError(error, req, res, true);
  }
}