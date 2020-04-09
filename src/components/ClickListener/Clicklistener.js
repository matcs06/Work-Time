import React from "react";
import "./Clicklistener.css";

import Img from "../../images/ment.png";
// import { Container } from './styles';

const ClickListener = ({ content, click, data, monthSelected }) => {
  const Component = content;

  if (click) {
    return (
      <div className="main-container">
        <Component data={data} data2={monthSelected} />
      </div>
    );
  } else {
    return <div className="image-container"></div>;
  }
};

export default ClickListener;
