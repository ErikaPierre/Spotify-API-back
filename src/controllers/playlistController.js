import Playlist from "../models/playlistModel";
import { Song } from "../models/songModel";

const getAllPlaylist = async (req, res) => {
  try {
    const playlists = await Playlist.find();
    res.json(playlists);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getAplaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id).populate("songs");
    res.json(playlist);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createPlaylist = async (req, res) => {
  const { title } = req.body;
  const { description } = req.body;
  try {
    const newPlaylist = await Playlist.create({
      title: title,
      description: description,
      image: req.file ? req.file.path : null,
    });
    // imagePath = newPlaylist.image;
    res.json({
      newPlaylist,
      // imagePath,
      message: "Your playlist has been succefully create ",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const editPlaylist = async (req, res) => {
  try {
    const updatePlaylist = await Playlist.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({
      updatePlaylist,
      message: "Your playlist has been succefully updated ",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deletePlaylist = async (req, res) => {
  try {
    const deletePlaylist = await Playlist.findByIdAndDelete(req.params.id);
    res.json({
      deletePlaylist,
      message: "Your playlist has been succefully deleted ",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteSongPlaylist = async (req, res) => {
  try {
    const playlistID = await Playlist.findById(req.params.id_play);
    const removeSong = await Song.findById(req.params.id_song);
    res.json({
      removeSong,
      message: "Your music has been succefully delete from your playlist ",
    });
    playlistID.songs.pull(removeSong);
    playlistID.save();
  } catch (error) {
    res.json({ error: error.message });
  }
};

export {
  getAllPlaylist,
  getAplaylist,
  createPlaylist,
  editPlaylist,
  deletePlaylist,
  deleteSongPlaylist,
};
