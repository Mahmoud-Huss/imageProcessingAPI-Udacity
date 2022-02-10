"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const PORT = 5000;
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express_1.default.static("public"));
app.use("/", router_1.default);
app.use(function (req, res) {
    res.status(404);
    res.render("pageNotFound");
});
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
exports.default = app;
