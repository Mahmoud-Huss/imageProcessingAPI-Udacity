"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processImage = void 0;
const fs_1 = require("fs");
const sharp_1 = __importDefault(require("sharp"));
const utils_1 = require("../utils/utils");
const processImage = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    ///Get image instance
    const { image } = (0, utils_1.checkParameters)(filename, width, height);
    let processed;
    let file;
    //Check the returned image.name if it's incorrect
    if (image.name != "Incorrect filename") {
        file = yield fs_1.promises.readFile(`public/images/${image.name}${image.ext}`);
    }
    else {
        return (processed = false);
    }
    //Reszing image and saving to disk
    if (height > 0 && width > 0) {
        (0, sharp_1.default)(file)
            .resize(width, height)
            .toFile(`public/thumbnails/${image.name}-${width}-${height}${image.ext}`)
            .then(() => {
            console.log(`Saved successfully:${image.name}-${width}-${height}${image.ext}`);
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
});
exports.processImage = processImage;
