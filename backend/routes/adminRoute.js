import express from "express";
import adminController from "../controller/adminController.js";
import authAdmin from "../middleware/authAdmin.js";
import upload from "../middleware/multer.js";
import { changeAvailablity } from "../controller/doctorController.js";


const { addDoctor, adminLogin, allDoctors } = adminController;
const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", adminLogin)
adminRouter.post("/all-doctors", authAdmin, allDoctors)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)


export default adminRouter;
