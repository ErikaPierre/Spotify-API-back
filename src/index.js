import express from "express"; // necessaire pour le back
import dotenv from "dotenv"; // pour appeler notre fichier.env
import mongoose from "mongoose";
import { playlistRouter } from "./routes/playlistRoute";
import { songRouter } from "./routes/songRoute";
import { auth } from "./middlewares/auth";
import userRouter from "./routes/userRoute";
import cors from "cors";

dotenv.config(); //pour appeler la configuration de l'environnement

const app = express();
const port = process.env.PORT;
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`📁DATABASE CONNECTED🐳`);
}

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/playlists", playlistRouter);
app.use("/songs", songRouter);

app.get("/", (req, res) => {
  res.send("Welcom on API Spotify");
});

app.listen(port, () =>
  console.log(`Server is listening on port : http://localhost:${port}`)
);
