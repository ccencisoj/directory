import connectMongo from "lib/connectMongo";
import Directory from "models/Directory";
import pathResolver from 'path';
import getUser from 'lib/getUser';
import { FILE } from "constants/common";
import PathError from "errors/PathError";
import handleError from "lib/handleError";

export default async (req, res)=> {
  try {
    await connectMongo();

    const user = await getUser(req);
    const path = req.body.path;
    const type = req.body.type;

    if(path == null) 
      throw new PathError("the 'path' is empty");

    if(type == null)
      throw new PathError("the 'type' is empty");
    
    const results = await Directory.create({
      user: user.id,
      path: path,
      type: type ? type : FILE,
      dirname: pathResolver.dirname(path),
      basename: pathResolver.basename(path),
      extname: pathResolver.extname(path)
    });

    return res.json({directory: results});

  }catch(error) {
    handleError(error, req, res);
  }
}