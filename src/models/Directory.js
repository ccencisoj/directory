import { Schema, model, models, Types } from 'mongoose';

const DirectorySchema = new Schema({
  type: {type: String, require: true},
  user: {type: Types.ObjectId, ref: "User", require: true},
  path: {type: String, require: true},
  dirname: {type: String, require: true},
  basename: {type: String, require: true},
  extname: {type: String, require: true}
});

DirectorySchema.set("toJSON", {
  transform: (document, returnedObject)=> {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
})

const Directory = models.Directory || model("Directory", DirectorySchema);

export default Directory;