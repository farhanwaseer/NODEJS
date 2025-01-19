const express = require("express");
const app = express();
const PORT = 3000;

require("dotenv").config();

const cookieParser = require("cookie-parser");
const dbgr = require("debug")("development:server");
const path = require("path");
const expressSession = require("express-session");
const flash = require("connect-flash");

const db = require("./config/mongoose-connect");
const userModel = require("./models/userModel");
const productModel = require("./models/product");

const indexRouter = require("./routes/index");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
  })
);
app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/owner", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(PORT || 3000, () => {
  dbgr(`Server working on Port:${PORT}`);
});
