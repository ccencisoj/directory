import connectMongo from "lib/connectMongo";
import Directory from "models/Directory";
import getUser from 'lib/getUser';
import PathError from "errors/PathError";
import handleError from "lib/handleError";

export default async (req, res)=> {
  try {
    await connectMongo();

    const user = await getUser(req);
    const directoryId = req.body.directoryId;

    if(directoryId == null)
      throw new PathError("It is required the directory id");
    
    await Directory.deleteOne({user: user.id, id: directoryId});

    return res.json({deleted: true});

  }catch(error) {
    handleError(error, req, res);
  }
}