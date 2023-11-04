import React, { useState } from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";

const App = () => {
  const [data, setData] = useState([
    { _id: 1, src: "./images/thumbs/image-1.webp" },
    { _id: 2, src: "./images/thumbs/image-2.webp" },
    { _id: 3, src: "./images/thumbs/image-3.webp" },
    { _id: 4, src: "./images/thumbs/image-4.webp" },
    { _id: 5, src: "./images/thumbs/image-5.webp" },
    { _id: 6, src: "./images/thumbs/image-6.webp" },
    { _id: 7, src: "./images/thumbs/image-7.webp" },
    { _id: 8, src: "./images/thumbs/image-8.webp" },
    { _id: 9, src: "./images/thumbs/image-9.webp" },
    { _id: 10, src: "./images/thumbs/image-10.jpeg" },
    { _id: 11, src: "./images/thumbs/image-11.jpeg" },
  ]);
  const [checkedItems, setCheckedItems] = useState([]);
  return (
    <>
      <Header
        data={data}
        setData={setData}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
      <Gallery
        data={data}
        setData={setData}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
    </>
  );
};

export default App;
