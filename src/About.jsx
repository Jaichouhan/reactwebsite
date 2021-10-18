import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import photo1 from "../src/images/image2.png";
 


const About = () => {
    return (
        <>
          <Common name="Welcome to About page"
           imgsrc={photo1} 
           visit="/contact"
            btname="Contact Now"/>
        </>
    );
};

export default About;