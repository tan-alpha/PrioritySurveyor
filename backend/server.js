const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cors = require("cors");

//Loading config
dotenv.config({ path: "./config/config.env" });

//Connecting to Database
connectDB();

//Initialising App
const app = express();

app.use(express.static(__dirname));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));

app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);
