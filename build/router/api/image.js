"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const processImage_1 = require("../../modules/processImage");
const utils_1 = require("../../utils/utils");
const image = express_1.default.Router();
image.get("/", (req, res) => {
    const filename = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    const { imageExist, invalidHeight, invalidWidth, processedBefore, image } = (0, utils_1.checkParameters)(filename, width, height);
    // get image instance by name if it's valid
    if (imageExist && !invalidWidth && !invalidHeight && !processedBefore) {
        (0, processImage_1.processImage)(filename, width, height);
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
exports.default = image;
