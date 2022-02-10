"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image_1 = __importDefault(require("./api/image"));
const utils_1 = require("../utils/utils");
const routes = express_1.default.Router();
const { images } = (0, utils_1.getImages)();
const imageNames = images.map((name) => name.name);
routes.get("/", (req, res) => {
    res.status(200);
    res.render("index", {
        title: "Image Processor API",
        imageNames: imageNames,
    });
});
routes.use("/image", image_1.default);
exports.default = routes;
