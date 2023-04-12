import { useState, useEffect } from "react";
import "./App.css";
import {
  Home,
  All_Product,
  Add_Product,
  ProductUpdate,
  Login, Register
} from "./Pages/index";
import MainLayout from "./Components/layout/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [userdata, setUserData] = useState({});
  useEffect(() => {
    const user = localStorage.getItem('user');
    const Data = JSON.parse(user);
    setUserData(Data)
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            !userdata ?
              <Route exact path="/" element={<Login />} />
              :
              <Route exact path="/" element={<MainLayout />}>
                <Route exact index element={<Home />} />
                <Route exact path="/All_Products" element={<All_Product />} />
                <Route exact path="/Add_Product" element={<Add_Product />} />
                <Route exact path='/ProductUpdate/:id' element={<ProductUpdate />} />
              </Route>
          }
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
