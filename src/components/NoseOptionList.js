import React, { useEffect } from "react";

const NoseOptionList = ({ setSelectedOptions, handleOptionChange }) => {
  const images = require.context("../../public/images/noses", true);
  const imageList = images.keys().map((image) => images(image));
  // console.log(imageList);

  const handleHairOptionClick = (image) => {
    handleOptionChange("nose", image);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageList.length);

    setSelectedOptions((selectedOption) => {
      return { ...selectedOption, nose: imageList[randomIndex] };
    });
  }, []);

  return (
    <div className="list-section">
      <h2>Noses</h2>
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

export default NoseOptionList;
