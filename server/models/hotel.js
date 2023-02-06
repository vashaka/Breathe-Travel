const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    viewed: { type: String, required: true },
    reviews: { type: Number, required: true },
    stars: { type: Number, required: true },
  },
  { timestamps: true }
);

const hotelModel = mongoose.model("Hotel", hotelSchema);
module.exports = hotelModel;
