import express from "express";
import { create } from "express-handlebars";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import productsRoutes from "./routes/products.js";
import flash from "connect-flash";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

const hbs = create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash);

app.use(authRoutes);
app.use(productsRoutes);

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const PORT = process.env.PORT || 4100;
    app.listen(PORT, () => console.log(`PORT is running in ${PORT}`));
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
}

connect();
