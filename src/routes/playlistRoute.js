import {
  createPlaylist,
  deletePlaylist,
  deleteSongPlaylist,
  editPlaylist,
  getAllPlaylist,
} from "../controllers/playlistController";

const playlistRouter = require("express").Router();

playlistRouter.get("/all", getAllPlaylist);
playlistRouter.post("/create", createPlaylist);
playlistRouter.put("/update/:id", editPlaylist);
playlistRouter.delete("/delete/:id", deletePlaylist);
playlistRouter.delete("/:id_song/deletesong/:id_play", deleteSongPlaylist);

export { playlistRouter };
