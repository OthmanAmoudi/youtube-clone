const express = require("express");
const app = express();
const helmet = require("helmet");
const localsMiddleware = require("./localsMiddleware");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const globalRouter = require("./routers/globalRouter");
const userRouter = require("./routers/userRouter");
const videoRouter = require("./routers/videoRouter");
const routes = require("./routes");

//middlwares
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

//config
app.set("view engine", "pug");

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

module.exports = app;
