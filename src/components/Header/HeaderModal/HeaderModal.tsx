import vector from "../../../assets/Vector.svg";

interface HeaderModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
  scrollToBody: () => void;
  scrollToSlider: () => void;
  scrollToAccordion: () => void;
  scrollToFuter: () => void;
}

export const HeaderModal: React.FC<HeaderModalProps> = ({
  isModalOpen,
  toggleModal,
  scrollToBody,
  scrollToSlider,
  scrollToAccordion,
  scrollToFuter,
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
  ) : null;
};
