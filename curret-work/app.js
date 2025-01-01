const express = require("express");
const app = express();
const PORT = 3000;

const cookieParser = require("cookie-parser");
const dbgr = require("debug")("development:server");
const path = require("path");
const db = require("./config/mongoose-connect")
const userModel = require("./models/userModel");
const productModel = require("./models/product");

const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(PORT || 3000, () => {
    dbgr(`Server working on Port:${PORT}`);
});