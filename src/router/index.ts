import express from "express";
import image from "./api/image";
import { getImages } from "../utils/utils";

const routes = express.Router();

const { images } = getImages();
const imageNames = images.map((name) => name.name);

routes.get("/", (req: express.Request, res: express.Response): void => {
  res.status(200);
  res.render("index", {
    title: "Image Processor API",
    imageNames: imageNames,
  });
});

routes.use("/image", image);

export default routes;
