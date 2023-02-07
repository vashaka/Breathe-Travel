const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const landmarkSchema = new Schema(
  {
    title: { type: String, required: true },
    side: String,
    imageUrl: { type: String, required: true },
    images: { type: Array },
    price: { type: Number, required: true },
    rating: { type: String, required: true },
    reviews: { type: Number, required: true },
    viewed: { type: String, required: true },
    stars: { type: Number, required: true },
    coordinates: { x: String, y: String },
  },
  { timestamps: true }
);

const landmarkModel = mongoose.model("Landmark", landmarkSchema);
module.exports = landmarkModel;
