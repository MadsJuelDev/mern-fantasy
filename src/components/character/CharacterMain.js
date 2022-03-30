import { React, useEffect, useState } from "react";
import Hair from "./Hair";
import axios from "axios";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

const CharacterMain = () => {
  //Here i can write javascript code and functions
  const url = "/cc/api/hair/";
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, data } = useQuery("cc-hair", () => {
    return axios.get(url);
  });

  if (isLoading) {
    return <h2>Loading.. </h2>;
  }

  return (
    <div className="content-section">
      <div className="content-section-title"></div>
      <h2 className="grid-title">All hair assets</h2>
      <div className="apps-card testimonial-grid">
        {data?.data.map((hair) => {
          return <Hair hair={hair} />;
        })}
      </div>
    </div>
  );
};

export default CharacterMain;
