import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter product Name."],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "PLease Enter Prduct Price."],
    },
    category: {
        type: String,
        required: [true, "Please Enter product Category"],
    },
    quantity: {
        type: Number,
        required: [true, "please Enter product Stock"],
    },
    img: {
        type: String
    },
});

const ProductSchema = new mongoose.model("productSchema", productSchema);

export default ProductSchema;   