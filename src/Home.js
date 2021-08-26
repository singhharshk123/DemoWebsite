import React from "react";
import "./Home.css";
import Helmet from "react-helmet";
import Navs from "./components/Navbar/Navs";
import Products from "./Products";
// import firstHome from "./images/home.jpg";
// import Products from "./Products";

function Home() {
  return (
    <div>
      <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          FliqaIndia: Photography, Videography & Graphic Design related creative
          platform{" "}
        </title>
        <meta
          name="description"
          content="Personalised platforms for Photography, Videography with Graphics. 
          One of the leading platforms in the creative domain."  />

        <meta property="og:title" content="Personalised platforms for Photography, Videography with Graphics. 
        One of the leading platforms in the creative domain." />

        <meta property="og:description" content="Personalised platforms for Photography, Videography with Graphics. 
        One of the leading platforms in the creative domain." />

        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div>
        <h1 style={{fontStyle:'italic'}}>Please click on Services in the navbar to visit the 2nd page ( Logo design page ).</h1>
      </div>
      
      <Navs />
      <Products />

      <div className="container">
        <div className="containerText">
          <div className="firstLine">
            <h2>About US</h2>
            <h4 className="sub-heading">
              <span style={{ color: "#007bff" }}>FilqaIndia</span>
              {""} for everyone
            </h4>
          </div>

          <p className="paragraph">
            <span>
              With this belief, we at Fliqaindia started our journey 5 years ago
              with the belief that everyone has the right to quality photography
              to help them better capture and conserve their special moments. We
              have been appreciated and recommended by Start Up India, StartUp
              Bengal, Imagesbazaar and Digital India for our novel initiative.
              <br />
              <br />
              We have partnered with Canvera to give you the best service
              possible. We are also trusted by Justdial, WedMEGood, Shaadisaga,
              weddingwire and so many well known event organisers.
            </span>
          </p>
        </div>
      </div>
    </div>
    <br /><br />
    <div>
      <h1 style={{fontStyle:"italic"}}>
        This demo website is created by:- Harsh Singh.
       <p />Email:- singhharshk123@gmail.com 
      </h1>
    </div>
    </div>
  );
}

export default Home;
