interface CursProps {
  imgClass: string;
  title: string;
  description: string;
}

export const Curs: React.FC<CursProps> = ({ imgClass, title, description }) => {
  return (
    <div className="curs">
      <div className={`${imgClass} curs_img`}></div>
      <div>
        <div className="curs_title">{title}</div>
        <div className="curs_item">{description}</div>
      </div>
    </div>
  );
};
