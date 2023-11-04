import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Header = ({ data, setData, checkedItems, setCheckedItems }) => {
  const handleDelete = () => {
    const filteredData = data.filter(
      (item, index) => !checkedItems.includes(index)
    );
    setData(filteredData);
    setCheckedItems([]);
  };
  return (
    <Wraper>
      <div className="container">
        {checkedItems.length > 0 ? (
          <>
            <div>
              {checkedItems.length}{" "}
              {checkedItems.length > 1 ? "items selected" : "item selected"}
            </div>
            <Button onClick={handleDelete}>
              <i className="fa-solid fa-trash"></i>Delete File
            </Button>
          </>
        ) : (
          <div className="logo">
            <img src="./images/icons/gallery.png" alt="" />
            gallery
          </div>
        )}
      </div>
    </Wraper>
  );
};

export default Header;

// css styling using styled component
const Wraper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 0 5px #ddd;
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      display: flex;
      align-items: center;
      gap: 5px;
      font-family: "Pacifico", cursive;
      font-size: 24px;
      font-weight: 500;
      img {
        width: 40px;
      }
    }
  }
`;
