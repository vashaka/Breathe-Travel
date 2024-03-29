const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const hotelRoutes = require("./routes/hotels");
const landmarkRoutes = require("./routes/landmarks");
const authRoutes = require("./routes/auth");

const PORT = 3001;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/hotels", hotelRoutes);
app.use("/landmarks", landmarkRoutes);
app.use("/auth", authRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://vashaka:Data932868@cluster0.t88gvjj.mongodb.net/hotels?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT);
    console.log(`Listening on port ${PORT}`);
  })
  .catch((err) => {
    console.log(`Failed to listen on port 3001 ${err}`);
  });
