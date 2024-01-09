import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userName: String,
  email: { type: String, unique: true },
  password: {
    type: String,
    min: [6, " Your password is too small, minimum 6 characters"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
