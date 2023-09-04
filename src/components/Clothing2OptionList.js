import React, { useEffect } from "react";

const Clothing2OptionList = ({ setSelectedOptions, handleOptionChange }) => {
  const images = require.context("../../public/images/clothes/layer_2", true);
  const imageList = images.keys().map((image) => images(image));
  // console.log(imageList);

  const handleHairOptionClick = (image) => {
    handleOptionChange("clothing2", image);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageList.length);

    setSelectedOptions((selectedOption) => {
      return { ...selectedOption, clothing2: imageList[randomIndex] };
    });
  }, []);

  return (
    <div className="list-section">
      <h2>Clothing 2</h2>
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

export default Clothing2OptionList;
