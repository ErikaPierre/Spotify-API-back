import express, { Router } from "express"; // necessaire pour le back
import dotenv from "dotenv"; // pour appeler notre fichier.env
import mongoose from "mongoose";
import router from "./routes/userRoute";
dotenv.config(); //pour appeler la configuration de l'environnement

const app = express();
const port = process.env.PORT;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`📁DATABASE CONNECTED🐳`);
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/auth", router);

app.listen(port, () =>
  console.log(`Server is listening on port : http://localhost:${port}`)
);
