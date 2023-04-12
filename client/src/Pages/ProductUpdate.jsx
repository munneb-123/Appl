import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Typography, Stack, Button } from "@mui/material";
import axios from 'axios';
import './Style.css'
import { NavLink, useNavigate } from "react-router-dom"

const ProductUpdate = () => {

    const [Product, setProduct] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();


    const AddProductOnCLick = () => {
        axios.patch(`http://localhost:8000/posts/updateProduct/${id}`, {name,price})
        alert("Product Update successfully.")
        navigate('/All_Products')
    }


    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Stack sx={{ width: "80%" }}>
                <Typography
                    variant="h5"
                    color="myColor.main"
                    fontWeight={600}
                    sx={{
                        textAlign: "center",
                        background: "#000",
                        p: 2,
                        borderRadius: "12px",
                    }}
                >
                    Add New Products
                </Typography>
                <Stack direction='column' sx={{ mt: 3 }}>
                    <label> Product Name</label>
                    <input type="text" name='name' onChange={(e) => setName(e.target.value)} className="input" />
                    <label> Price</label>
                    <input type="Number" name='price' onChange={(e) => setPrice(e.target.value)} className="input" />
                    <Button type="submit" className="input"
                        sx={{
                            background: "#000", color: "myColor.main", py: 3, borderRadius: "12px",
                            '&:hover': {
                                backgroundColor: '#000000',
                            }
                        }}
                        onClick={AddProductOnCLick}
                    >Add Product</Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default ProductUpdate