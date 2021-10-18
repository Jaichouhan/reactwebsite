import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import photo from "../src/images/image.png";



const Home = () => {
    return (
        <>
          <Common
                    name="Grow your web business with"
                    imgsrc={photo} 
                    visit="/service"
                    btname="Get Started"
         />
        </>
    );
};

export default Home;