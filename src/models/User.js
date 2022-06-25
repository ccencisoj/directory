import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({});

UserSchema.set("toJSON", {
  transform: (document, returnedObject)=> {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
})

const User = models.User || model("User", UserSchema);

export default User;