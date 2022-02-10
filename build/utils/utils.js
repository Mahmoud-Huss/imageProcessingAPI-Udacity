"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkParameters = exports.getImages = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const getImages = () => {
    const imagesFolder = "./public/images";
    const thumbsFolder = "./public/thumbnails";
    const images = fs_1.default.readdirSync(imagesFolder).map((image) => path_1.default.parse(image));
    const thumbs = fs_1.default.readdirSync(thumbsFolder).map((image) => path_1.default.parse(image));
    return { images, thumbs };
};
exports.getImages = getImages;
const checkParameters = (filename, width, height) => {
    let invalidHeight = false;
    let invalidWidth = false;
    let imageExist = false;
    let processedBefore = false;
    const { images } = (0, exports.getImages)();
    const imageNames = images.map((image) => image.name);
    const { thumbs } = (0, exports.getImages)();
    const thumbNames = thumbs.map((image) => image.name);
    const image = images.filter((image) => image.name === filename)[0] || {
        name: "Incorrect filename",
    };
    if (filename) {
        if (thumbNames.includes(`${image.name}-${width}-${height}`)) {
            processedBefore = true;
        }
        else {
            processedBefore = false;
        }
        if (imageNames.includes(filename)) {
            imageExist = true;
        }
        else {
            imageExist = false;
        }
    }
    else {
        imageExist = false;
    }
    //check width and height to be valid numbers
    if (Number.isNaN(width) && Number.isNaN(height)) {
        invalidWidth = true;
        invalidHeight = true;
    }
    else if (Number.isNaN(width) && !Number.isNaN(height)) {
        invalidHeight = false;
        invalidWidth = true;
    }
    else if (!Number.isNaN(width) && Number.isNaN(height)) {
        invalidHeight = true;
        invalidWidth = false;
    }
    else if (width < 1 || height < 1) {
        invalidHeight = true;
        invalidWidth = true;
    }
    else {
        invalidHeight = false;
        invalidWidth = false;
    }
    return { invalidHeight, invalidWidth, imageExist, processedBefore, image };
};
exports.checkParameters = checkParameters;
