import React, { useContext } from "react";
import Accordion from "../components/Accordion/Accordion";
import RandomColor from "../components/RandomColor";
import StarRating from "../components/StarRating";
import ImageSlider from "../components/ImageSlider";
import { bgContext } from "../contexts/BackgroundColor";
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
function Projects() {
  const { bgColor, setBgColor } = useContext(bgContext); // useContext to set color on different area
  return (
    <div>
      <div>
        <h1>Project 14: Tic Tac Toe</h1>
        <TicTacToe />
      </div>
      {/* <div>
        <h1>Project 13: Search and Auto complete</h1>
        <SearchAutoComp />
      </div> */}
      {/* <div>
        <h1>Project 12: Github profile finder</h1>
        <GithubProfileFinder />
      </div> */}
      <div>
        <h1>Project 11: open pop up window</h1>
        <ModalPopUp />
      </div>
      <div>
        <h1>Project 1: Accordion</h1>
        <Accordion />
      </div>
      <div>
        <h1>Project 2: Random background color</h1>
        <RandomColor />
      </div>
      <div>
        <h1>Project 3: Star rating</h1>
        <StarRating numStars={10} />
      </div>
      {/* <div style={{ backgroundColor: bgColor }}>
        <h1>Project 4: Images slider</h1>
        <ImageSlider />
      </div> */}
      {/* <div>
        <h1>Project 5: Load more data</h1>
        <LoadMoreData />
      </div> */}
      <div>
        <h1>Project 6: Treeview Navbar</h1>
        <Treeview menuList={menuList} />
      </div>
      {/* <div>
        <h1>Project 7: QR code generator</h1>
        <QRCodeGenerator />
      </div> */}
      <div>
        <h1>Project 8: Light Dark Mode</h1>
        <LightDarkMode />
      </div>
      {/* <div>
        <h1>Project 9: Scroll Indicatior</h1>
        <ScrollIndicator URL="https://dummyjson.com/products?limit=100&select=title" />
      </div> */}
      {/* <div>
        <h1>Project 10: Custom Tabs</h1>
        <CustomTabs URL="https://dummyjson.com/todos?limit=10" />
      </div> */}
    </div>
  );
}
export default Projects;
