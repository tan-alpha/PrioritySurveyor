const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

//Loading config
dotenv.config({ path: "./config/config.env" });

//Connecting to Database
connectDB();

//Defining Routes
const auth = require("./routes/auth");
const question = require("./routes/question");

//Initialising App
const app = express();

app.use(express.static(__dirname));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Adding Cors functionality
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

//Setting Session
app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser("secretcode"));

app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

//Morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Using Router
app.use("/api/auth", auth);
app.use("/api/question", question);

//Port number settings up
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
