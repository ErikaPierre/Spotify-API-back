import express from "express"; // necessaire pour le back
import dotenv from "dotenv"; // pour appeler notre fichier.env
dotenv.config(); //pour appeler la configuration de l'environnement

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world");
});

// main().catch((err) => console.log(err));

app.listen(port, () =>
  console.log(`Server is listening on port : http://localhost:${port}`)
);
