import mongoose, { Schema } from "mongoose";
import bcrypt, { genSalt } from "bcryptjs";

const userSchema = new Schema({
  userName: String,
  email: { type: String, unique: true },
  password: {
    type: String,
    min: [6, " Your password is too small, minimum 6 characters"],
  },
});

userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(5);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const User = mongoose.model("User", userSchema);

export default User;
