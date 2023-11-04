import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { laptop, mobile, tablet } from "../styles/Responsive";

const Gallery = ({ data, setData, checkedItems, setCheckedItems }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedOverItem, setDraggedOverItem] = useState(null);

  const changeImageHandler = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setData((old) => {
            const arr = data.map((data) => data._id);
            const maxId = Math.max(...arr);
            return [...old, { _id: maxId + index + 1, src: reader.result }];
          });
        }
      };
    });
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (e.target.checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  const handleSort = () => {
    let copyItems = [...data];
    let currentItem = copyItems.splice(draggedItem, 1)[0];
    copyItems.splice(draggedOverItem, 0, currentItem);
    setData(copyItems);
  };

  const dragStart = (index) => {
    setCheckedItems([]);
    setDraggedItem(index);
  };
  const dragEnter = (index) => {
    setDraggedOverItem(index);
  };

  return (
    <Wraper>
      <div className="container">
        <div className="gallery">
          {data.map((item, index) => (
            <motion.div
              layout
              key={item._id}
              className={checkedItems.includes(index) ? "item active" : "item"}
              draggable
              onDragStart={() => dragStart(index)}
              onDragEnter={() => dragEnter(index)}
              onDragEnd={handleSort}
            >
              <img src={item.src} alt="" draggable="false" />
              <input
                className="checkbox"
                type="checkbox"
                value={index}
                checked={checkedItems.includes(index)}
                onChange={handleChange}
              />
            </motion.div>
          ))}
          <div className="upload">
            <label htmlFor="file" className="dfc">
              <img src="./images/icons/upload.png" alt="" />
              <span>Add Images</span>
            </label>
            <input
              type="file"
              accept="image/*"
              id="file"
              multiple
              onChange={changeImageHandler}
            />
          </div>
        </div>
      </div>
    </Wraper>
  );
};

export default Gallery;

// css styling using styled component
const Wraper = styled.div`
  .gallery {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    ${laptop({ gridTemplateColumns: "repeat(4, 1fr)" })}
    ${tablet({ gridTemplateColumns: "repeat(3, 1fr)" })}
    ${mobile({ gridTemplateColumns: "repeat(2, 1fr)" })}
    grid-auto-rows: 1fr;
    gap: 20px;
    padding: 50px 0;
  }
  .item {
    position: relative;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
    }
    &:first-child {
      grid-area: 1 / 1 / 3 / 3;
    }
    &.active {
      border: 2px solid var(--theme);
    }
    input {
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 6;
      transition: 0.3s;
      visibility: hidden;
      opacity: 0;
    }
    &.active input {
      visibility: visible;
      opacity: 1;
    }
    &:hover input {
      visibility: visible;
      opacity: 1;
    }
  }
  .upload {
    background-color: #eeeeee;
    border-radius: 50%;
    height: 100%;
    input {
      display: none;
    }
    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
      height: 100%;
      cursor: pointer;
      user-select: none;
      img {
        width: 70px;
      }
    }
  }
`;
