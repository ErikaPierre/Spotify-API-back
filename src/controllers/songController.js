import Playlist from "../models/playlistModel";
import { Song } from "../models/songModel";

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getAsong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    res.json(song);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createSong = async (req, res) => {
  const { title, artiste, album, duree, scr } = req.body;
  try {
    const newSong = await Song.create({
      title: title,
      artiste: artiste,
      album: album,
      duree: duree,
      scr: scr,
    });
    res.json({ newSong, message: "Your music has been succefully create " });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const insertSongPlaylist = async (req, res) => {
  try {
    const playlistID = await Playlist.findById(req.params.id_play);
    const newSongAdd = await Song.findById(req.params.id_song);
    res.json({
      newSongAdd,
      message: "Your music has been succefully add to your playlist ",
    });
    playlistID.songs.push(newSongAdd);
    playlistID.save();
  } catch (error) {
    res.json({ error: error.message });
  }
};

const editSong = async (req, res) => {
  try {
    const updateSong = await Song.findByIdAndUpdate(
      { _id: req.params.id_song },
      req.body,
      { new: true }
    );
    res.json({
      updateSong,
      message: "Your music has been succefully updated",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteSong = async (req, res) => {
  try {
    const removeSong = await Song.findOneAndDelete({ _id: req.params.id_song });
    res.json({
      removeSong,
      message: "Your music has been succefully deleted",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
export {
  getAllSongs,
  getAsong,
  createSong,
  insertSongPlaylist,
  editSong,
  deleteSong,
};
