import React from "react";
import { Routes } from "react-router-dom";
import CharacterMain from "./character/CharacterMain";
import SidebarCreator from "./sidebarCreator";

const Creator = () => {
  return (
    <div className="wrapper">
      <SidebarCreator />
      <CharacterMain />
    </div>
  );
};

export default Creator;
