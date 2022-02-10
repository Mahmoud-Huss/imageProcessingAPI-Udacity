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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
const processImage_1 = require("../modules/processImage");
describe("Process Image", function () {
    it("check image processor with existing image name", () => __awaiter(this, void 0, void 0, function* () {
        const filename = "fjord";
        const width = 200;
        const height = 200;
        const processed = yield (0, processImage_1.processImage)(filename, width, height);
        expect(processed).toBe(true);
    }));
    it("check image processor with invalid inputs", () => __awaiter(this, void 0, void 0, function* () {
        const filename = "fjooord";
        const width = 0;
        const height = 0;
        const processed = yield (0, processImage_1.processImage)(filename, width, height);
        expect(processed).toBe(false);
    }));
});
