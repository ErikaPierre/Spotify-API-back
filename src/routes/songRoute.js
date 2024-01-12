import {
  createSong,
  getAllSongs,
  insertSongPlaylist,
  editSong,
  deleteSong,
  getAsong,
} from "../controllers/songController";

const songRouter = require("express").Router();

songRouter.get("/all", getAllSongs);
songRouter.get("/get/:id", getAsong);
songRouter.post("/createsong", createSong);
songRouter.post("/:id_play/addtoplaylist/:id_song", insertSongPlaylist);
songRouter.put("/update/:id_song", editSong);
songRouter.delete("/removesong/:id_song", deleteSong);

export { songRouter };
