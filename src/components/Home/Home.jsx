import React from "react";
import img1 from "../../Images/hunger.jpg";
import { motion } from "framer-motion";
import "../../styles/Home.scss";

const Home = () => {
    return (
        <motion.div>
            <motion.h1
                initial={{ color: "red" }}
                animate={{ fontSize: 100, color: "black", y: 100 }}
                transition={{ delay: 1.5, duration: 5 }}
            >
                Annadan
            </motion.h1>
            <img src={img1} alt="" />
        </motion.div>
    );
};

export default Home;
