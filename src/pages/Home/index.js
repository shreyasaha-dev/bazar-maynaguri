import React from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeAboutCard from "../../components/HomeAboutCard";
import HomeProduct from "../../components/HomeProduct/index";
import LatestProduct from "../../components/LatestProduct";
import aboutDivider from "../../images/about divider.jpg";
import about1 from "../../images/about1.png";
import about2 from "../../images/about2.png";
import about3 from "../../images/about3.png";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import product1 from "../../images/product1.jpg";
import product2 from "../../images/product2.jpg";
import product3 from "../../images/product3.jpg";
import product4 from "../../images/product4.png";
import product5 from "../../images/product5.png";
import product6 from "../../images/product6.jpg";
import product7 from "../../images/product7.JPG";
import product8 from "../../images/product8.png";
import { addToken } from "../../store/Reducers/userDataReducer";
import "./home.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const homeBannerDetails = [
    {
      image: banner1,
      title: "Quality Assurance",
      description: "Free weighting Machine for our members.",
      buttonTitle: "Call For Enquiry",
    },
    {
      image: banner2,
      title: "Simply Dummy Caption Here",
      description: "Free weighting Machine for our members.",
      buttonTitle: "Call For Enquiry",
    },
    {
      image: banner3,
      title: "Quality Assurance",
      description: "Free weighting Machine for our members.",
      buttonTitle: "Call For Enquiry",
    },
  ];

  const aboutDetails = [
    {
      image: about1,
      title: "Best Quality Product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      image: about2,
      title: "Free Shipping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      image: about3,
      title: "On Time Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.",
    },
  ];

  const productDetails = [
    {
      title: "Product name show here",
      price: "40.00",
      image: product1,
    },
    {
      title: "Product name show here",
      price: "40.00",
      image: product2,
    },
    {
      title: "Product name show here",
      price: "40.00",
      image: product3,
    },
    {
      title: "Product name show here",
      price: "40.00",
      image: product4,
    },
    {
      title: "Product name show here",
      price: "40.00",
      image: product5,
    },
    {
      title: "Product name show here",
      price: "40.00",
      image: product6,
    },
    {
      title: "Product name show here",
      price: "40.00",
      image: product7,
    },
    {
      title: "Product name show here",
      price: "40.00",
      image: product8,
    },
  ];

  const dispatch = useDispatch();
  return (
    <>
      <NavBar />
      <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false}>
        {homeBannerDetails?.map((item, i) => {
          return (
            <div
              className="top-banner-carousel-details-section"
              key={i}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.buttonTitle}</button>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="about-main-section">
        <div className="about-heading-section">
          <h1>Welcome To BazarMoynaguri</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae pharetra erat. Fusce quis suscipit leo. Nulla scelerisque erat
            in nam at efficitur tortor, vitae porttitor mi. Morbi sit amet velit
            nec leo imperdiet porttitor mi. Morbi sit amet velit nec leo
            imperdiet.
          </p>
          <img src={aboutDivider} alt="about-divider" />
        </div>
        <div className="about-card-section">
          <div className="card-details-section">
            {aboutDetails?.map((item, i) => {
              return (
                <HomeAboutCard
                  key={i}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/search-products");
          }}
        >
          Quality product at your door step
        </button>
      </div>
      <div className="product-main-section">
        <div className="product-heading-section">
          <h1>Our Products</h1>
          <p>Shopping made easy or some caption text show here</p>
          <img src={aboutDivider} alt="about-divider" />
        </div>
        <div className="product-details-section">
          {productDetails?.map((item, i) => {
            return (
              <HomeProduct
                key={i}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-details">
          <h1>If you have any query please feel free to contact us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <button>Contact Us</button>
      </div>
      <div className="latest-product-main-section">
        <div className="latest-product-section">
          <div className="product-heading-section">
            <h1>Latest Products</h1>
            <p>Shopping made easy or some caption text show here</p>
            <img src={aboutDivider} alt="about-divider" />
          </div>
          <div className="latest-product-details-section">
            <MultiCarousel
              responsive={responsive}
              autoPlay={true}
              infinite={true}
              arrows={false}
            >
              {productDetails?.map((item, i) => {
                return (
                  <LatestProduct
                    key={i}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                  />
                );
              })}
            </MultiCarousel>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
