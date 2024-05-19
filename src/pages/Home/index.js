// import React from "react";
// import { useDispatch } from "react-redux";
// import { addToken } from "../../store/Reducers/userDataReducer";
// import "./home.css";
// import HomeAboutCard from "../../components/HomeAboutCard";

// const Home = () => {
//   const homeBannerDetails = [
//     {
//       image: require("../../images/banner1.jpg"),
//       title: "Quality Assurance",
//       description: "Free weighting Machine for our members.",
//       buttonTitle: "Call For Enquiry",
//     },
//     {
//       image: require("../../images/banner2.jpg"),
//       title: "Simply Dummy Caption Here",
//       description: "Free weighting Machine for our members.",
//       buttonTitle: "Call For Enquiry",
//     },
//     {
//       image: require("../../images/banner3.jpg"),
//       title: "Quality Assurance",
//       description: "Free weighting Machine for our members.",
//       buttonTitle: "Call For Enquiry",
//     },
//   ];

//   const aboutDetails = [
//     {
//       image: require("../../images/about1.png"),
//       title: "Best Quality Product",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.",
//     },
//     {
//       image: require("../../images/about2.png"),
//       title: "Free Shipping",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.",
//     },
//     {
//       image: require("../../images/about3.png"),
//       title: "On Time Delivery",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.",
//     },
//   ];

//   const dispatch = useDispatch();
//   return (
//     <div>
//       Home
//       <button
//         onClick={() => {
//           dispatch(addToken(""));
//         }}
//       >
//         log out
//       </button>
//       <CCarousel indicators>
//         {homeBannerDetails?.map((item, i) => {
//           return (
//             <CCarouselItem key={i}>
//               <CImage
//                 className="d-block w-100"
//                 src={item.image}
//                 alt={`slide ${i + 1}`}
//               />
//               <CCarouselCaption className="top-banner-carousel-details-section">
//                 <div>
//                   <h1>{item.title}</h1>
//                   <p>{item.description}</p>
//                   <button>{item.buttonTitle}</button>
//                 </div>
//               </CCarouselCaption>
//             </CCarouselItem>
//           );
//         })}
//       </CCarousel>
//       <div className="about-main-section">
//         <div className="about-heading-section">
//           <h1>Welcome To BazarMoynaguri</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             vitae pharetra erat. Fusce quis suscipit leo. Nulla scelerisque erat
//             in nam at efficitur tortor, vitae porttitor mi. Morbi sit amet velit
//             nec leo imperdiet porttitor mi. Morbi sit amet velit nec leo
//             imperdiet.
//           </p>
//           <img
//             src={require("../../images/about divider.jpg")}
//             alt="about-divider"
//           />
//         </div>
//         <div className="about-card-section">
//           <div className="card-details-section">
//             {aboutDetails?.map((item, i) => {
//               return (
//                 <HomeAboutCard
//                   key={i}
//                   image={item.image}
//                   title={item.title}
//                   description={item.description}
//                 />
//               );
//             })}
//           </div>
//         </div>
//         <button>Quality product at your door step</button>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../store/Reducers/userDataReducer";
const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      Home
      <button
        onClick={() => {
          dispatch(addToken(""));
        }}
      >
        log out
      </button>
    </div>
  );
};

export default Home;
