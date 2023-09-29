import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
const router = Router();

router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login | Boom shop",
    isLogin: true,
  });
});

router.post("/login", async (req, res) => {
  const existUser = await User.findOne({ email: req.body.email });
  res.redirect("/");
});

router.get("/register", (req, res) => {
  res.render("register", {
    title: "Register | Boom shop",
    isRegister: true,
  });
});

router.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const userData = {
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    password: hashedPassword,
  };
  const user = await User.create(userData);
  res.redirect("/");
});

export default router;
