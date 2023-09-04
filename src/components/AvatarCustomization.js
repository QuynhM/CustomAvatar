import React, { useState } from "react";
// import fs from "fs";
import Avatar from "./Avatar";
import HairOptionList from "./HairOptionList";
import GlassesOptionList from "./GlassesOptionList";
import MouthOptionList from "./MouthOptionList";
import NoseOptionList from "./NoseOptionList";
import EyesOptionList from "./EyesOptionList";
import Clothing1OptionList from "./Clothing1OptionList";
import Clothing2OptionList from "./Clothing2OptionList";
import Clothing3OptionList from "./Clothing3OptionList";
import BodyOptionList from "./BodyOptionList";
import EyebrowOptionList from "./EyebrowOptionList";

const AvatarCustomization = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    hair: null,
    glasses: null,
    mouth: null,
    nose: null,
    eyes: null,
    clothing1: null,
    clothing2: null,
    clothing3: null,
    body: null,
  });

  const handleOptionChange = (part, image) => {
    setSelectedOptions((selectedOptions) => ({
      ...selectedOptions,
      [part]: image,
    }));
  };

  // RANDOM
  const randomizeBody = () => {
    const images = require.context("../../public/images/body", true);
    const imageList = images.keys().map((image) => images(image));
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[randomIndex];
    setSelectedOptions((selectedOptions) => ({
      ...selectedOptions,
      body: randomImage,
    }));
  };

  const randomizeHair = () => {
    const images = require.context("../../public/images/hair", true);
    const imageList = images.keys().map((image) => images(image));
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[randomIndex];
    setSelectedOptions((selectedOptions) => ({
      ...selectedOptions,
      hair: randomImage,
    }));
  };

  const randomizeGlasses = () => {
    const images = require.context(
      "../../public/images/accessories/glasses",
      true
    );
    const imageList = images.keys().map((image) => images(image));
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[randomIndex];
    setSelectedOptions((selectedOptions) => ({
      ...selectedOptions,
      glasses: randomImage,
    }));
  };

  const randomizeMouth = () => {
    const images = require.context("../../public/images/mouths", true);
    const imageList = images.keys().map((image) => images(image));
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[randomIndex];
    setSelectedOptions((selectedOptions) => ({
      ...selectedOptions,
      mouth: randomImage,
    }));
  };

  const randomizeNose = () => {
    const images = require.context("../../public/images/noses", true);
    const imageList = images.keys().map((image) => images(image));
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[randomIndex];
    setSelectedOptions((selectedOptions) => ({
      ...selectedOptions,
      nose: randomImage,
    }));
  };

  const randomizeEyes = () => {
    const images = require.context("../../public/images/eyes", true);
    const imageList = images.keys().map((image) => images(image));
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[randomIndex];
    setSelectedOptions((selectedOptions) => ({
      ...selectedOptions,
      eyes: randomImage,
    }));
  };

  const randomizeEyebrows = () => {
    const images = require.context("../../public/images/eyebrows", true);
    const imageList = images.keys().map((image) => images(image));
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[randomIndex];
    setSelectedOptions((selectedOptions) => ({
      ...selectedOptions,
      eyebrows: randomImage,
    }));
  };

  const randomizeClothing1 = () => {
    const images = require.context("../../public/images/clothes/layer_1", true);
    const imageList = images.keys().map((image) => images(image));
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[randomIndex];
    setSelectedOptions((selectedOptions) => ({
      ...selectedOptions,
      clothing1: randomImage,
    }));
  };

  const randomizeClothing2 = () => {
    const images = require.context("../../public/images/clothes/layer_2", true);
    const imageList = images.keys().map((image) => images(image));
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[randomIndex];
    setSelectedOptions((selectedOptions) => ({
      ...selectedOptions,
      clothing2: randomImage,
    }));
  };

  const randomizeClothing3 = () => {
    const images = require.context("../../public/images/clothes/layer_3", true);
    const imageList = images.keys().map((image) => images(image));
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[randomIndex];
    setSelectedOptions((selectedOptions) => ({
      ...selectedOptions,
      clothing3: randomImage,
    }));
  };

  const handleRandomizeClick = () => {
    randomizeHair();
    randomizeGlasses();
    randomizeMouth();
    randomizeNose();
    randomizeEyes();
    randomizeClothing1();
    randomizeClothing2();
    randomizeClothing3();
    randomizeBody();
    randomizeEyebrows();
  };

  return (
    <>
      <div className="App">
        <div class="title">CHARACTER</div>
        {/* <div class="divider"></div> */}
        <div class="subtitle">CUSTOMIZATION</div>
        <div class="divider"></div>

        <div className="avatar-group gap-30">
          <div>
            <div className="avatar-wrapper">
              {/* component Avatar để display avatar */}
              <Avatar selectedOptions={selectedOptions} />

              <div class="text-center">
                <button class="button" onClick={handleRandomizeClick}>
                  Randomize!
                </button>
              </div>
            </div>
          </div>

          {/* component OptionList để display options */}
          <div>
            <BodyOptionList
              setSelectedOptions={setSelectedOptions}
              handleOptionChange={handleOptionChange}
            />
            <EyesOptionList
              setSelectedOptions={setSelectedOptions}
              handleOptionChange={handleOptionChange}
            />
            <HairOptionList
              setSelectedOptions={setSelectedOptions}
              handleOptionChange={handleOptionChange}
            />
            <MouthOptionList
              setSelectedOptions={setSelectedOptions}
              handleOptionChange={handleOptionChange}
            />
            <EyebrowOptionList
              setSelectedOptions={setSelectedOptions}
              handleOptionChange={handleOptionChange}
            />
            <NoseOptionList
              setSelectedOptions={setSelectedOptions}
              handleOptionChange={handleOptionChange}
            />
            <GlassesOptionList
              setSelectedOptions={setSelectedOptions}
              handleOptionChange={handleOptionChange}
            />
            <Clothing1OptionList
              setSelectedOptions={setSelectedOptions}
              handleOptionChange={handleOptionChange}
            />
            <Clothing2OptionList
              setSelectedOptions={setSelectedOptions}
              handleOptionChange={handleOptionChange}
            />
            <Clothing3OptionList
              setSelectedOptions={setSelectedOptions}
              handleOptionChange={handleOptionChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AvatarCustomization;
