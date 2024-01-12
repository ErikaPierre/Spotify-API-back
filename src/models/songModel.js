import mongoose from "mongoose";
import { Schema } from "mongoose";

const songSchema = new Schema({
  title: String,
  artiste: String,
  album: String,
  duree: String,
  genre: String,
  source: String,
});

const Song = mongoose.model("Song", songSchema);

export { Song };
