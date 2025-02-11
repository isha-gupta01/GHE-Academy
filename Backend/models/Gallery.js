import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  images: [{ imageUrl: String }],
});

const Gallery = mongoose.model("Gallery", GallerySchema, "Gallery");

export default Gallery;
