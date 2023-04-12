import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { Table, Button } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from "react-router-dom";
import axios from 'axios'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const All_Product = () => {

  const [product, setproduct] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    await axios.get('http://localhost:8000/posts/getAllProducts').then((res) => { setproduct(res.data.data) });
  }

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/posts/deleteProduct/${id}`);
    getData();
    alert("product delete successfully.")
  }
 if (product.length === 0) {
    return <div>No data is present.</div>;
  }


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Quantity</StyledTableCell>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Update</StyledTableCell>
            <StyledTableCell>Detele</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          product.map((data) => (
            <StyledTableRow key={data._id}>
              <StyledTableCell >
                <img src={`http://localhost:8000/${data.img}`} alt="" width={100} />
              </StyledTableCell>
              <StyledTableCell >{data.name}</StyledTableCell>
              <StyledTableCell>{data.quantity}</StyledTableCell>
              <StyledTableCell>{data.category}</StyledTableCell>
              <StyledTableCell>{data.price}$</StyledTableCell>
              <StyledTableCell>

                <NavLink to={`/ProductUpdate/${data._id}`}>
                  <Button sx={{
                    background: '#1942FB', color: "#fff",
                    '&:hover': {
                      backgroundColor: '#1942FB',
                    }
                  }}>
                    Edit
                  </Button>
                </NavLink>

              </StyledTableCell>
              <StyledTableCell>
                <Button sx={{
                  background: '#FB2019', color: "#fff",
                  '&:hover': {
                    backgroundColor: '#FB2019',
                  }
                }}
                  onClick={() => deleteProduct(data._id)}
                >Delete</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default All_Product