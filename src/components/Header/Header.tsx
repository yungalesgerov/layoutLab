import React, { useState } from "react";
import "./Header.css";
import vector from "../../assets/Vector.svg";

interface HeaderProps {
  scrollToBody: () => void;
  scrollToSlider: () => void;
  scrollToAccordion: () => void;
  scrollToFuter: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  scrollToBody,
  scrollToSlider,
  scrollToAccordion,
  scrollToFuter,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <div className="header_logo">
            <div className="cor_uno"></div>
            <div className="cor_two"></div>
            testLab
          </div>
          <nav className="nav">
            <a className="nav_link" onClick={scrollToBody}>
              Как это работает
            </a>
            <a className="nav_link" onClick={scrollToSlider}>
              3-й блок
            </a>
            <a className="nav_link" onClick={scrollToAccordion}>
              Вопросы и ответы
            </a>
            <a className="nav_link" onClick={scrollToFuter}>
              Форма
            </a>
          </nav>
          <div className="burger_menu" onClick={toggleModal}>
            <span
              className={isModalOpen ? "burger_item_1" : "burger_item"}
            ></span>
            <span
              className={isModalOpen ? "burger_item_2" : "burger_item"}
            ></span>
          </div>
        </div>
        <div className="intro">
          <div className="intro_suptitle">
            Говорят, никогда не поздно сменить профессию
          </div>
          <div className="intro_title">
            Сделай круто тестовое задание и у тебя получится
          </div>
          <div className="intro_btn">
            <button className="btn" onClick={scrollToAccordion}>
              Проще простого!
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal_content">
            <div className="modal_header">
              <div className="modal_logo">
                <div className="cor_uno"></div>
                <div className="cor_two"></div>
                testLab
              </div>
              <button className="close_button" onClick={toggleModal}>
                &times;
              </button>
            </div>
            <ul className="modal_nav">
              <li className="nav_item" onClick={scrollToBody}>
                Как это работает
                <img src={vector} alt="" />
              </li>
              <li className="nav_item" onClick={scrollToSlider}>
                3-й блок
                <img src={vector} alt="" />
              </li>
              <li className="nav_item" onClick={scrollToAccordion}>
                Вопросы и ответы
                <img src={vector} alt="" />
              </li>
              <li className="nav_item" onClick={scrollToFuter}>
                Форма
                <img src={vector} alt="" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
