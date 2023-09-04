import React, { useEffect } from "react";

const MouthOptionList = ({ setSelectedOptions, handleOptionChange }) => {
  const images = require.context("../../public/images/mouths", true);
  const imageList = images.keys().map((image) => images(image));
  // console.log(imageList);

  const handleHairOptionClick = (image) => {
    handleOptionChange("mouth", image);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageList.length);

    setSelectedOptions((selectedOption) => {
      return { ...selectedOption, mouth: imageList[randomIndex] };
    });
  }, []);

  return (
    <div className="list-section">
      <h2>Mouth</h2>
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

export default MouthOptionList;
