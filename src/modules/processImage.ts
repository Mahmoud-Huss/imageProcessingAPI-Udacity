import { promises as fsPromises } from "fs";
import sharp from "sharp";
import { checkParameters } from "../utils/utils";

export const processImage = async (
  filename: string,
  width: number,
  height: number
): Promise<boolean> => {
  ///Get image instance
  const { image } = checkParameters(filename, width, height);
  let processed: boolean;
  let file: object;
  //Check the returned image.name if it's incorrect
  if (image.name != "Incorrect filename") {
    file = await fsPromises.readFile(`public/images/${image.name}${image.ext}`);
  } else {
    return (processed = false);
  }
  //Reszing image and saving to disk
  if (height > 0 && width > 0) {
    sharp(file)
      .resize(width, height)
      .toFile(`public/thumbnails/${image.name}-${width}-${height}${image.ext}`)
      .then(() => {
        console.log(
          `Saved successfully:${image.name}-${width}-${height}${image.ext}`
        );
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
        processed = false;
      });
  }

  processed = true;
  return processed;
};
