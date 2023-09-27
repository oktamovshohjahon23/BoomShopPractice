import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Main page | Boom shop",
  });
});

router.get("/products", (req, res) => {
  res.render("products", {
    title: "Products | Boom shop",
    isProducts: true,
  });
});

router.get("/add", (req, res) => {
  res.render("add", {
    title: "Add product | Boom shop",
    isAdd: true,
  });
});

export default router;
