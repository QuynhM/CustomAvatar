import React, { useEffect } from "react";

const Clothing1OptionList = ({ setSelectedOptions, handleOptionChange }) => {
  const images = require.context("../../public/images/clothes/layer_1", true);
  const imageList = images.keys().map((image) => images(image));
  // console.log(imageList);

  const handleClothing1OptionClick = (image) => {
    handleOptionChange("clothing1", image);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageList.length);

    setSelectedOptions((selectedOption) => {
      return { ...selectedOption, clothing1: imageList[randomIndex] };
    });
  }, []);

  return (
    <div className="list-section">
      <h2>Clothing 1</h2>
      <div className="list">
        {imageList.map((image, index) => (
          <div
            className="clickable square"
            key={index}
            onClick={() => handleClothing1OptionClick(image)}
          >
            <img
              src={image}
              alt={index}
              height="60"
              className="img-center"
              style={{ top: "50%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothing1OptionList;
