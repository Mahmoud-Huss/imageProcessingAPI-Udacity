import express from "express";
import { processImage } from "../../modules/processImage";
import { checkParameters } from "../../utils/utils";

const image = express.Router();

image.get("/", (req: express.Request, res: express.Response): void => {
  const filename: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  const { imageExist, invalidHeight, invalidWidth, processedBefore, image } =
    checkParameters(filename, width, height);

  // get image instance by name if it's valid

  if (imageExist && !invalidWidth && !invalidHeight && !processedBefore) {
    processImage(filename, width, height);
  }
  //Send response accorddnig to parameters
  res.status(200);
  res.render("image", {
    title: "Image",
    image,
    width,
    height,
    invalidWidth,
    invalidHeight,
    imageExist,
  });
});
export default image;
