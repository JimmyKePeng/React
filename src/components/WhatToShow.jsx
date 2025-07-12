import React, { useContext } from "react";
import Accordion from "../components/Accordion/Accordion";
import RandomColor from "../components/RandomColor";
import StarRating from "../components/StarRating";
import ImageSlider from "../components/ImageSlider";
import LoadMoreData from "../components/LoadMoreData/LoadMoreData";
import Treeview from "../components/Treeview/Treeview";
import { menuList } from "../components/Treeview/data";
import QRCodeGenerator from "../components/QRCodeGenerator";
import LightDarkMode from "../components/LightDarkMode/LightDarkMode";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";
import CustomTabs from "../components/CustomTabs/CustomTabs";
import ModalPopUp from "../components/ModalPopUp/ModalPopUp";
import GithubProfileFinder from "../components/GithubProfileFinder/GithubProfileFinder";
import SearchAutoComp from "../components/SearchAutoComp";
import TicTacToe from "../components/TicTacToe/TicTacToe";
import { WhatToShowContext } from "../contexts/WhatToShowContext";

export default function WhatToShow() {
  const { show } = useContext(WhatToShowContext);
  const components = [
    {
      key: "TicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "SearchAutoComp",
      component: <SearchAutoComp />,
    },
    {
      key: "StarRating",
      component: <StarRating numStars={10} />,
    },
    {
      key: "CustomTabs",
      component: <CustomTabs URL="https://dummyjson.com/todos?limit=10" />,
    },
    {
      key: "GithubProfileFinder",
      component: <GithubProfileFinder />,
    },
    {
      key: "LightDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "ModalPopUp",
      component: <ModalPopUp />,
    },
    {
      key: "Accordion",
      component: <Accordion />,
    },
    {
      key: "Treeview",
      component: <Treeview />,
    },
    {
      key: "ImageSlider",
      component: <ImageSlider />,
    },
    {
      key: "QRCodeGenerator",
      component: <QRCodeGenerator />,
    },
    {
      key: "RandomColor",
      component: <RandomColor />,
    },
    {
      key: "ScrollIndicator",
      component: (
        <ScrollIndicator URL="https://dummyjson.com/products?limit=100&select=title" />
      ),
    },
    {
      key: "LoadMoreData",
      component: <LoadMoreData />,
    },
  ];

  function checkComponent(key) {
    return show[key];
  }
  if (!show) return <h1>Error getting what to show data</h1>;
  return (
    <div>
      {components.map((item) =>
        checkComponent(item.key) ? item.component : null
      )}
    </div>
  );
}
