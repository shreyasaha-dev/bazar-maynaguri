import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useSelector } from "react-redux";
const SearchProducts = () => {
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("Vegetable");
  const [categoryId, setCategoryId] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [breadcrumsCategory, setBreadcrumsCategory] = useState("Vegetable");
  const [subCategoryId, setSubCategoryId] = useState([]);
  const [sortBy, setSortBy] = useState(2);
  const userToken = useSelector((state) => state.userToken);
  const muiTheme = getMuiTheme({
    slider: {
      selectionColor: "#f82e2e",
      trackSize: "5px",
      handleSize: "15px",
    },
  });
  const getData = async () => {
    try {
      const response = await axios.post(
        "https://infowarescripts.com/dev/react-mechine-test/api/search-data",
        {
          params: {
            cat_slug: category,
            sort_by: sortBy,
            category_id: categoryId,
            sub_category_id: subCategoryId,
            keyword: searchInput,
            price_range: [
              Number(Math.round(priceRange[0])),
              Number(Math.round(priceRange[1])),
            ],
            offset: 0,
          },
        },
        { headers: { Authorization: `Bearer ${userToken}` } }
      );
      console.log(response);
      if (response?.data?.result?.products) {
        setAllProducts(response?.data?.result?.products);
      } else {
        setAllProducts([]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getCategory = async () => {
    try {
      const response = await axios.post(
        "https://infowarescripts.com/dev/react-mechine-test/api/common-data",
        {},
        { headers: { Authorization: `Bearer ${userToken}` } }
      );
      console.log(response?.data.result?.categories);
      if (response?.data?.result?.categories) {
        setAllCategory(response?.data?.result?.categories);
        setSubCategory(response?.data?.result?.categories[0]?.sub_categories);
      } else {
        setAllCategory([]);
        setSubCategory([]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);
  useEffect(() => {
    getData();
  }, [sortBy]);
  const filter = () => {
    getData();
    setBreadcrumsCategory(category);
  };
  return (
    <div className="total-search">
      <NavBar />
      <div className="search-whole-section">
        <div className="breadcrums">
          <a href="">Home</a>
          <span>
            <IoIosArrowForward />
          </span>
          <a href="">{breadcrumsCategory}</a>
        </div>
        <div className="search-mid-section">
          <div className="search-left-section">
            <h3>Filter Options</h3>
            <div className="search">
              <input
                placeholder="Keyword"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
              <span>
                <IoSearchOutline />
              </span>
            </div>
            <p>Category</p>
            <select
              value={category}
              onChange={(e) => {
                console.log(e);
                setCategory(e.target.value);
                const selectedOption = e.target.selectedOptions[0];
                const selectedItem = selectedOption.getAttribute("data-item");
                console.log(JSON.parse(selectedItem));
                setCategoryId(JSON.parse(selectedItem)?.id);
                setSubCategory(JSON.parse(selectedItem)?.sub_categories);
              }}
            >
              {allCategory?.map((item) => {
                return (
                  <option
                    key={item?.name}
                    value={item?.name}
                    data-item={JSON.stringify(item)}
                  >
                    {item?.name}
                  </option>
                );
              })}
            </select>
            <p>Sub Category</p>
            <div className="all-sub-category">
              {subCategory?.map((item) => {
                return (
                  <div className="each-sub-category">
                    <span>
                      <Checkbox
                        sx={{
                          color: "#aaaaaa",
                          "&.Mui-checked": {
                            color: "#f82e2e",
                          },
                        }}
                        checked={item?.id === subCategoryId}
                        onChange={() => {
                          setSubCategoryId(item?.id);
                        }}
                      />
                    </span>
                    <label>{item?.name}</label>
                  </div>
                );
              })}
            </div>
            <p style={{ marginTop: "10px" }}>Price Range</p>
            <div style={{ width: "85%" }}>
              <MuiThemeProvider muiTheme={muiTheme}>
                <Slider
                  min={0}
                  max={1000}
                  onChange={(e, newValue) => {
                    console.log(e, newValue);
                    setPriceRange([0, newValue]);
                  }}
                />
              </MuiThemeProvider>
            </div>
            <h4>
              Rs.{priceRange[0]} - Rs.{Math.round(priceRange[1])}
            </h4>
            <button onClick={filter}>Filter</button>
          </div>
          <div className="search-right-section">
            <div className="search-right-top-section">
              <p>Showing 1-20 out of 100 product for vegetable</p>
              <div className="sort-by">
                <p>SORT BY : </p>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                  }}
                >
                  <option value={2}>Price - Low to High</option>
                  <option value={3}>Price - High to Low</option>
                </select>
              </div>
            </div>
            <div className="search-right-mid-section">
              {allProducts?.map((item, i) => {
                return (
                  <EachProducts
                    key={i}
                    productName={item?.title}
                    price={item?.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchProducts;
