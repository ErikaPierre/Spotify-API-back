import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema({
  title: String,
  description: String,
  songs: [{ type: Schema.Types.ObjectId, ref: "Song" }],
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  image: String,
  genre: String,
});

const Playlist = mongoose.model("Playlist", playlistSchema);

export default Playlist;
