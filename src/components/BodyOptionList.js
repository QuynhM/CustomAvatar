import React, { useEffect } from "react";

const BodyOptionList = ({ setSelectedOptions, handleOptionChange }) => {
  const images = require.context("../../public/images/body", true);
  const imageList = images.keys().map((image) => images(image));
  // console.log(imageList);

  const handleBodyOptionClick = (image) => {
    handleOptionChange("body", image);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageList.length);

    setSelectedOptions((selectedOption) => {
      return { ...selectedOption, body: imageList[randomIndex] };
    });
  }, []);

  return (
    <div className="list-section">
      <h2>Body</h2>
      <div className="list">
        {imageList.map((image, index) => (
          <div
            className="clickable square"
            key={index}
            onClick={() => handleBodyOptionClick(image)}
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

export default BodyOptionList;
