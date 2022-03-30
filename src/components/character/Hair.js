import { React, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

const Hair = ({ hair }) => {
  const url = "/cc/api/hair/";
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, data } = useQuery("cc-hair", () => {
    return axios.get(url);
  });

  if (isLoading) {
    return <h2>Loading.. </h2>;
  }

  return (
    <>
      <motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="app-card testimonial"
        key={hair.id}
        style={{ borderRadius: "14px" }}
      >
        <motion.div className="card-flex-top">
          <motion.h2 layout="position">{hair.name}</motion.h2>
          <motion.img
            layout="position"
            className="asset-img"
            src={hair.assetLocation}
            alt="hair 1"
          ></motion.img>
        </motion.div>
        {isOpen && (
          <motion.div>
            <div className="app-card__subtext">The Color is: {hair.color}</div>
            <div className="app-card__subtext">The Style is: {hair.style}</div>
            <div className="app-card-buttons">
              <button className="content-button status-button">Update</button>
              <button className="content-button status-button button-margin">
                Try it!
              </button>
              <div className="menu"></div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Hair;
