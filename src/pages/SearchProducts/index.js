import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import NavBar from "../../components/NavBar";
import EachProducts from "../../components/EachProduct";
import "./searchPage.css";
import Checkbox from "@mui/material/Checkbox";
import Slider from "material-ui/Slider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { MuiThemeProvider } from "material-ui";
import Footer from "../../components/Footer";
const SearchProducts = () => {
  const muiTheme = getMuiTheme({
    slider: {
      selectionColor: "#f82e2e",
      trackSize: "5px",
      handleSize: "15px",
    },
  });
  return (
    <div className="total-search">
      <NavBar />
      <div className="search-whole-section">
        <div className="breadcrums">
          <a href="">Home</a>
          <span>
            <IoIosArrowForward />
          </span>
          <a href="">Vegetables</a>
        </div>
        <div className="search-mid-section">
          <div className="search-left-section">
            <h3>Filter Options</h3>
            <div className="search">
              <input placeholder="Keyword" />
              <span>
                <IoSearchOutline />
              </span>
            </div>
            <p>Category</p>
            <select>
              <option>Vegetable</option>
              <option>Fruits</option>
              <option>Dairy Products</option>
              <option>Organic Products</option>
              <option>Grocery Items</option>
            </select>
            <p>Sub Category</p>
            <div className="all-sub-category">
              <div className="each-sub-category">
                <span>
                  <Checkbox
                    sx={{
                      color: "#aaaaaa",
                      "&.Mui-checked": {
                        color: "#f82e2e",
                      },
                    }}
                  />
                </span>
                <label>Sub Category one</label>
              </div>
              <div className="each-sub-category">
                <Checkbox
                  sx={{
                    color: "#aaaaaa",
                    "&.Mui-checked": {
                      color: "#f82e2e",
                    },
                  }}
                />
                <label>Sub Category two</label>
              </div>
              <div className="each-sub-category">
                <Checkbox
                  sx={{
                    color: "#aaaaaa",
                    "&.Mui-checked": {
                      color: "#f82e2e",
                    },
                  }}
                />
                <label>Sub Category</label>
              </div>
              <div className="each-sub-category">
                <Checkbox
                  sx={{
                    color: "#aaaaaa",
                    "&.Mui-checked": {
                      color: "#f82e2e",
                    },
                  }}
                />
                <label>Sub Category name here</label>
              </div>
              <div className="each-sub-category">
                <Checkbox
                  sx={{
                    color: "#aaaaaa",
                    "&.Mui-checked": {
                      color: "#f82e2e",
                    },
                  }}
                />
                <label>Sub Category</label>
              </div>
            </div>
            <p style={{ marginTop: "10px" }}>Price Range</p>
            <div style={{ width: "85%" }}>
              <MuiThemeProvider muiTheme={muiTheme}>
                <Slider
                  min={18}
                  max={90}
                  ValueLabelComponent={0}
                  defaultValue={40}
                />
              </MuiThemeProvider>
            </div>
            <h4>Rs.10 - Rs.500</h4>
            <button>Filter</button>
          </div>
          <div className="search-right-section">
            <div className="search-right-top-section">
              <p>Showing 1-20 out of 100 product for vegetable</p>
              <div className="sort-by">
                <p>SORT BY : </p>
                <select>
                  <option>Select</option>
                  <option>Price - Low to High</option>
                  <option>Price - High to Low</option>
                </select>
              </div>
            </div>
            <div className="search-right-mid-section">
              <EachProducts />
              <EachProducts />
              <EachProducts />
              <EachProducts />
              <EachProducts />
              <EachProducts />
              <EachProducts />
              <EachProducts />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchProducts;
