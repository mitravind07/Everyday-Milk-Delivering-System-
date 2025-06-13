const express = require("express");
const PORT = 8080;
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const staticRoute = require("./routes/redirect");
const dairyRoute = require("./routes/dairy");
const subscribeRoute = require("./routes/subscribe");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/dairy", dairyRoute);
app.use("/subscribe", subscribeRoute);
app.use("/", staticRoute);

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON PORT", PORT);
});
