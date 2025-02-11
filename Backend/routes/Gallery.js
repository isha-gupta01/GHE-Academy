import connectDB from "/backend/config/db";
import Gallery from "/backend/models/Gallery";

export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case "GET":
      try {
        const galleries = await Gallery.find({});
        res.status(200).json(galleries);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch gallery images" });
      }
      break;

    case "POST":
      try {
        const { title, imageUrl } = req.body;

        // Check if a gallery section with the same title exists
        let gallerySection = await Gallery.findOne({ title });

        if (gallerySection) {
          // Append new image to existing section
          gallerySection.images.push({ imageUrl });
          await gallerySection.save();
        } else {
          // Create new gallery section if not found
          gallerySection = new Gallery({
            title,
            images: [{ imageUrl }],
          });
          await gallerySection.save();
        }

        res.status(201).json(gallerySection);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to add image" });
      }
      break;

    case "DELETE":
      try {
        const { title, imageUrl } = req.body;

        const gallerySection = await Gallery.findOne({ title });

        if (!gallerySection) {
          return res.status(404).json({ error: "Title not found" });
        }

        // Filter out the image to be deleted
        gallerySection.images = gallerySection.images.filter(
          (img) => img.imageUrl !== imageUrl
        );

        if (gallerySection.images.length === 0) {
          // If no images remain, delete the entire section
          await Gallery.findOneAndDelete({ title });
        } else {
          // Otherwise, save the updated document
          await gallerySection.save();
        }

        res.status(200).json({ message: "Image deleted successfully" });
      } catch (error) {
        res.status(500).json({ error: "Failed to delete image" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
