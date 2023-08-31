import React from "react";

const Footer = (props) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-100 border border-gray-200 flex justify-center items-center">
      <audio controls>
        <source src={props?.data} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Footer;
