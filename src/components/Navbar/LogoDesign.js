import React from "react";
import Navs from "./Navs";
import "./Services.css";
import Helmet from "react-helmet";



const LogoDesign = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Logo Design</title>
        <meta
          name="description"
          content="Make your own brand identity through us. Start your design now. " />

        <meta
          property="og:title"
          content="Make your own brand identity through us. Start your design now." />

        <meta
          property="og:description"
          content="Make your own brand identity through us. Start your design now." />
      </Helmet>
      
      <div>
        <h1 style={{fontStyle:'italic'}}>Please click on Home in the navbar to visit the 1st page ( Home page ).</h1>
      </div>
      <Navs />
      <div>
        <span className="heading"> What is Logo design ?</span>

        <span className="logoPara">
          Logo tells the story of your brand. It enhances your brand image and
          speaks to your audience. Logo design makes the first impression for
          you in your working environment. Gives your business and brand an
          identity and projects a professional image. It creates memorable
          visuals to the outside world and build loyalty.
        </span>
      </div>

      <div className="last">
        <button className="btn1">Start designing</button>
        <button className="btn2">Get a quote</button>
      </div>
      
    </div>
  );
};

export default LogoDesign;
