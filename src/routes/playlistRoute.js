import {
  createPlaylist,
  deletePlaylist,
  deleteSongPlaylist,
  editPlaylist,
  getAllPlaylist,
  getAplaylist,
} from "../controllers/playlistController";

const playlistRouter = require("express").Router();

playlistRouter.get("/all", getAllPlaylist);
playlistRouter.get("/get/:id", getAplaylist);
playlistRouter.post("/create", createPlaylist);
playlistRouter.put("/update/:id", editPlaylist);
playlistRouter.delete("/delete/:id", deletePlaylist);
playlistRouter.delete("/:id_song/delete-song/:id_play", deleteSongPlaylist);

export { playlistRouter };
