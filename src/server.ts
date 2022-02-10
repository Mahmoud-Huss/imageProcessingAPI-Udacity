import express from "express";
import routes from "./router";

const PORT = 5000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express.static("public"));
app.use("/", routes);
app.use(function (req, res) {
  res.status(404);
  res.render("pageNotFound");
});
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

export default app;
