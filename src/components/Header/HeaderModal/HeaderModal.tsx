import vector from "../../../assets/Vector.svg";
import React from "react";

interface HeaderModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
  scrollToAdviceContent: () => void;
  scrollToSliderReview: () => void;
  scrollToFAQSection: () => void;
  scrollToFormSection: () => void;
}

export const HeaderModal: React.FC<HeaderModalProps> = ({
  isModalOpen,
  toggleModal,
  scrollToAdviceContent,
  scrollToSliderReview,
  scrollToFAQSection,
  scrollToFormSection,
}) => {
  return isModalOpen ? (
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
          <li className="nav_item" onClick={scrollToAdviceContent}>
            Как это работает
            <img src={vector} alt="" />
          </li>
          <li className="nav_item" onClick={scrollToSliderReview}>
            3-й блок
            <img src={vector} alt="" />
          </li>
          <li className="nav_item" onClick={scrollToFAQSection}>
            Вопросы и ответы
            <img src={vector} alt="" />
          </li>
          <li className="nav_item" onClick={scrollToFormSection}>
            Форма
            <img src={vector} alt="" />
          </li>
        </ul>
      </div>
    </div>
  ) : null;
};
