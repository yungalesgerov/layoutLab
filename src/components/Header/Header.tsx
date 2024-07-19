import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "./NavLink";
import { HeaderModal } from "./HeaderModal";

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
            <NavLink onClick={scrollToBody}>Как это работает</NavLink>
            <NavLink onClick={scrollToSlider}>3-й блок</NavLink>
            <NavLink onClick={scrollToAccordion}>Вопросы и ответы</NavLink>
            <NavLink onClick={scrollToFuter}>Форма</NavLink>
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
      <HeaderModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        scrollToBody={scrollToBody}
        scrollToSlider={scrollToSlider}
        scrollToAccordion={scrollToAccordion}
        scrollToFuter={scrollToFuter}
      />
    </header>
  );
};
