import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import './Style.css'
import axios from 'axios'
import { NavLink, useNavigate } from "react-router-dom"

const Add_Product = () => {
  const navigate = useNavigate();
  const [Product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    quantity: '',
    myImg: ''
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setProduct({ ...Product, [name]: value })
  }
  const AddProductOnCLick = async (e) => {
    e.preventDefault();
    let { name, price, category, quantity } = Product;
    let form = new FormData();
    form.append("myImg", Product.myImg);
    form.append("name", Product.name);
    form.append("price", Product.price);
    form.append("category", Product.category);
    form.append("stock", Product.quantity);
    try {
      if (!name || !price || !category || !quantity) {
        alert("Kindly filled complete form");
      }
      else {

        await axios.post('http://localhost:8000/posts/Create', Product,
        { headers: { 'Content-Type': 'multipart/form-data' } });

        alert("Product add successfully");
        navigate('/All_Products')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const imgHanlde = (e) => {
    setProduct({ ...Product, myImg: e.target.files[0] })
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
            p: 2, borderRadius: "12px",
          }}
        >
          Add New Products
        </Typography>
        <Stack direction='column' sx={{ mt: 3 }}>
          <label> Product Name</label>
          <input type="text" value={Product.name} name='name' onChange={handleInput} className="input" placeholder="name" />
          <label> Price</label>
          <input type="Number" value={Product.price} name='price' onChange={handleInput} className="input" placeholder="00$" />
          <label> Category</label>
          <input type="text" value={Product.category} name='category' onChange={handleInput} className="input" placeholder="mobile, laptop, watch ..." />
          <label> Quantity</label>
          <input type="Number" value={Product.quantity} name='quantity' onChange={handleInput} className="input" placeholder="0" />
          <label>Select Image</label>
          <input type="file" name='myImg' onChange={imgHanlde} className="Fileinput" style={{ marginBottom: "30px" }}></input>
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
  );
};

export default Add_Product;
