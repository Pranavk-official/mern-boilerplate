import express from "express";

import {
  addUser,
  adminHome,
  adminLogin,
  deleteuser,
  edituserData,
  userEdit,
  adminLogout,
} from "../controllers/adminController.js";

import { verifyToken } from "../utils/verifyAdmin.js";

const router = express.Router();

router.post("/login", adminLogin);
router.post("logout", adminLogout);
router.get("/home", verifyToken, adminHome);
router.route("/edit/:id").get(edituserData).post(userEdit);
router.post("/addUser", verifyToken, addUser);
router.get("/deleteUser/:id", verifyToken, deleteuser);

export default router;
