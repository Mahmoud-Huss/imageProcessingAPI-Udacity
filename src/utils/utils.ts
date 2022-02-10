import path from "path";
import fs from "fs";

interface checkparameters {
  invalidHeight: boolean;
  invalidWidth: boolean;
  imageExist: boolean;
  processedBefore: boolean;
  image: { name: string; ext: string };
}
interface getimages {
  images: path.ParsedPath[];
  thumbs: path.ParsedPath[];
}

export const getImages = (): getimages => {
  const imagesFolder = "./public/images";
  const thumbsFolder = "./public/thumbnails";

  const images = fs.readdirSync(imagesFolder).map((image) => path.parse(image));
  const thumbs = fs.readdirSync(thumbsFolder).map((image) => path.parse(image));
  return { images, thumbs };
};

export const checkParameters = (
  filename: string,
  width: unknown,
  height: unknown
): checkparameters => {
  let invalidHeight: boolean = false;
  let invalidWidth: boolean = false;
  let imageExist: boolean = false;
  let processedBefore: boolean = false;
  const { images } = getImages();
  const imageNames = images.map((image) => image.name);
  const { thumbs } = getImages();
  const thumbNames = thumbs.map((image) => image.name);
  const image = images.filter((image) => image.name === filename)[0] || {
    name: "Incorrect filename",
  };
  if (filename) {
    if (thumbNames.includes(`${image.name}-${width}-${height}`)) {
      processedBefore = true;
    } else {
      processedBefore = false;
    }
    if (imageNames.includes(filename)) {
      imageExist = true;
    } else {
      imageExist = false;
    }
  } else {
    imageExist = false;
  }
  //check width and height to be valid numbers
  if (Number.isNaN(width) && Number.isNaN(height)) {
    invalidWidth = true;
    invalidHeight = true;
  } else if (Number.isNaN(width) && !Number.isNaN(height)) {
    invalidHeight = false;
    invalidWidth = true;
  } else if (!Number.isNaN(width) && Number.isNaN(height)) {
    invalidHeight = true;
    invalidWidth = false;
  } else if ((width as number) < 1 || (height as number) < 1) {
    invalidHeight = true;
    invalidWidth = true;
  } else {
    invalidHeight = false;
    invalidWidth = false;
  }
  return { invalidHeight, invalidWidth, imageExist, processedBefore, image };
};
