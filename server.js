import express from "express";

const app = express();

const PORT = 4000;

const rootRouter = express.Router();

app.set("view engine", "pug");
app.set("views", process.cwd() + '/views');

app.use("/", rootRouter);

const home = (req, res) => {
    return res.render("home");
}

rootRouter.get("/", home);

const handleListening = () => {
    console.log(`Listening from http://localhost:${PORT}/ ✅`);
}

app.listen(PORT, handleListening);