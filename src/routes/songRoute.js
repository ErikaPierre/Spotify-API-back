import {
  createSong,
  getAllSongs,
  insertSongPlaylist,
  editSong,
  deleteSong,
} from "../controllers/songController";

const songRouter = require("express").Router();

songRouter.get("/all", getAllSongs);
songRouter.post("/createsong", createSong);
songRouter.post("/:id_play/addtoplaylist/:id_song", insertSongPlaylist);
songRouter.put("/update/:id_song", editSong);
songRouter.delete("/removesong/:id_song", deleteSong);

export { songRouter };
