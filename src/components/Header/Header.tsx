import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "./NavLink";
import { HeaderModal } from "./HeaderModal";

import backgroundImage from "../../assets/back1.png";

interface HeaderProps {
  adviceRef: React.RefObject<HTMLDivElement>;
  sliderRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
  formRef: React.RefObject<HTMLDivElement>;
}

export const Header: React.FC<HeaderProps> = ({
  adviceRef,
  sliderRef,
  faqRef,
  formRef,
}) => {
  const scrollToAdviceContent = () => {
    adviceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSliderReview = () => {
    sliderRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFAQSection = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFormSection = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header
      className="header"
      style={{
        background: `linear-gradient(rgba(15, 78, 196, 0.7), rgba(15, 78, 196, 0.7)), url(${backgroundImage}) center no-repeat`,
      }}
    >
      <div className="container">
        <div className="header_inner">
          <div className="header_logo">
            <div className="cor_uno"></div>
            <div className="cor_two"></div>
            testLab
          </div>
          <nav className="nav">
            <NavLink onClick={scrollToAdviceContent}>Как это работает</NavLink>
            <NavLink onClick={scrollToSliderReview}>3-й блок</NavLink>
            <NavLink onClick={scrollToFAQSection}>Вопросы и ответы</NavLink>
            <NavLink onClick={scrollToFormSection}>Форма</NavLink>
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
            <button className="btn" onClick={scrollToFAQSection}>
              Проще простого!
            </button>
          </div>
        </div>
      </div>
      <HeaderModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        scrollToAdviceContent={scrollToAdviceContent}
        scrollToSliderReview={scrollToSliderReview}
        scrollToFAQSection={scrollToFAQSection}
        scrollToFormSection={scrollToFormSection}
      />
    </header>
  );
};
