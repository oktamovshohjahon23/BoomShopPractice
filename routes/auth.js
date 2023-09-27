import { Router } from "express";
import User from "../models/User.js";
const router = Router();

router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login | Boom shop",
    isLogin: true,
  });
});

router.post("/login", (req, res) => {
  res.redirect("/");
  console.log(req.body);
});

router.get("/register", (req, res) => {
  res.render("register", {
    title: "Register | Boom shop",
    isRegister: true,
  });
});

router.post("/register", async (req, res) => {
  const userData = {
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  };
  const user = await User.create(userData);
  console.log(user);
  res.redirect("/");
});

export default router;