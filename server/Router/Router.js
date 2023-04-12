import express from "express";
import {
    getAllProducts,
    Create,
    deleteProduct,
    getProductById,
    updateProduct,
} from "../controller/ProductController.js";
import {
    Login, Register
} from '../controller/UserController.js'
import multer from 'multer';

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, flie, cb) {
        cb(null, "public")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + '.jpg')
    }
})

const upload = multer({ storage: storage });

router.post("/Create", upload.single('myImg'), Create);
router.get("/getAllProducts", getAllProducts);
router.get("/getProductById/:id", getProductById);
router.patch("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.post("/register", Register);
router.post("/login", Login);


export default router;