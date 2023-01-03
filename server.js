import express from "express";
import rootRouter from "./routers/rootRouter"

const app = express();

const PORT = 4000;

app.set("view engine", "pug");
app.set("views", process.cwd() + '/views');

app.use("/dist", express.static("dist"));
app.use("/", rootRouter);

const handleListening = () => {
    console.log(`Listening from http://localhost:${PORT}/ ✅`);
}

app.listen(PORT, handleListening);