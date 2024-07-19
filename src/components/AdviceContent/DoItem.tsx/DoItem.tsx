import React from "react";

interface DoItemProps {
  title: string;
  description: string;
  img: string;
}

export const DoItem: React.FC<DoItemProps> = ({ title, description, img }) => {
  return (
    <div className="curs">
      <img className="curs_img" src={img} alt="" />
      <div>
        <div className="curs_title">{title}</div>
        <div className="curs_item">{description}</div>
      </div>
    </div>
  );
};
