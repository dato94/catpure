import React from "react";
import home1 from '../img/home1.png';
//Framer Motion
import { motion } from "framer-motion";



import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {


    return(
        <About>
            <Description>
                <motion.div >
                    <Hide>
                        <motion.h2 >
                                    We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>
                                    your <span>dreams</span> come true.
                        </motion.h2>
                    </Hide>
                </motion.div>
                    <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills</p>
                    <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera" />
            </Image>
        </About>
    )
}

//Styled Components

export default AboutSection;