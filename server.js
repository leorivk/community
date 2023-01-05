import express from "express";
import rootRouter from "./routers/rootRouter"
import session from "express-session";

const app = express();

const PORT = 4000;

app.set("view engine", "pug");
app.set("views", process.cwd() + '/views');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/dist", express.static("dist"));
app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: false,
}))
app.use("/", rootRouter);

const handleListening = () => {
    console.log(`Listening from http://localhost:${PORT}/ ✅`);
}

app.listen(PORT, handleListening);