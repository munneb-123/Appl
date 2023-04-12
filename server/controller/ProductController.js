import ProductSchema from '../Model/ProductSchema.js'

//---Create product
export const Create = async (req, res) => {
    const imagePath = req.file.path; // we need only path to save into database of files
    const { name, category, quantity, price } = req.body;

    await ProductSchema.create({
        name, category, quantity, price, img: imagePath,
    });
    console.log(imagePath);
    res.status(200).json({
        success: true,
    });
};


//  getAllProducts  
export const getAllProducts = async (req, res) => {
    const allProducts = await ProductSchema.find();
    res.status(200).json({
        success: true,
        data: allProducts,
    });
};

// Delete product  
export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        await ProductSchema.findByIdAndRemove(req.params.id);
        res.status(200).json({
            success: true,
            messsage: "Product delete successfully.",
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
};


// Get ProductById 
export const getProductById = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await ProductSchema.findById({ _id: id });
        if (!product) {
            res.status(200).json({
                success: false,
                message: "Product is not find",
            });
        }
        res.status(200).json({
            success: true,
            product,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong in GetProductById API.');
    }
};

// Update Product
export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const product = await ProductSchema.findById({ _id: id });
    try {
        if (!product) {
            return res.status(500).json({
                success: false,
                message: "Product not found",
            });
        }
        const updateProduct = await ProductSchema.findByIdAndUpdate({ _id: id }, data);
        res.status(200).json({
            success: true,
            data: updateProduct,
        });
    } catch (error) {
        res.status(404).json({
            message: "Somthing went wrong in Server.",
        });
    }
};