import React from "react";

const Avatar = ({ selectedOptions }) => {
  const {
    body,
    hair,
    glasses,
    mouth,
    nose,
    eyes,
    eyebrows,
    clothing1,
    clothing2,
    clothing3,
  } = selectedOptions;

  return (
    <div className="avatar">
      {/* Hiển thị avatar với các tùy chỉnh đã chọn */}
      <img
        src={body}
        alt="Body"
        width="260"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      />
      <img
        src={eyes}
        alt="Eyes"
        width="260"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
      />
      <img
        src={hair}
        alt="Hair"
        width="260"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 6 }}
      />
      <img
        src={clothing1}
        alt="Clothing1"
        width="260"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}
      />
      <img
        src={clothing2}
        alt="Clothing2"
        width="260"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 3 }}
      />
      <img
        src={clothing3}
        alt="Clothing3"
        width="260"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 4 }}
      />
      <img
        src={mouth}
        alt="Mouth"
        width="260"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 4 }}
      />
      <img
        src={nose}
        alt="Nose"
        width="260"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 4 }}
      />
      <img
        src={eyebrows}
        alt="Eyebrows"
        width="260"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 4 }}
      />
      <img
        src={glasses}
        alt="Accessories"
        width="260"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 5 }}
      />

      {/* Hiển thị các phần khác của avatar tương tự */}
    </div>
  );
};

export default Avatar;
