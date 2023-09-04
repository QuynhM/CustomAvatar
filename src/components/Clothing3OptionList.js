import React, { useEffect } from "react";

const Clothing3OptionList = ({ setSelectedOptions, handleOptionChange }) => {
  const images = require.context("../../public/images/clothes/layer_3", true);
  const imageList = images.keys().map((image) => images(image));
  // console.log(imageList);

  const handleHairOptionClick = (image) => {
    handleOptionChange("clothing3", image);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageList.length);

    setSelectedOptions((selectedOption) => {
      return { ...selectedOption, clothing3: imageList[randomIndex] };
    });
  }, []);

  return (
    <div className="list-section">
      <h2>Clothing 3</h2>
      <div className="list">
        {imageList.map((image, index) => (
          <div
            className="clickable square"
            key={index}
            onClick={() => handleHairOptionClick(image)}
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

export default Clothing3OptionList;
