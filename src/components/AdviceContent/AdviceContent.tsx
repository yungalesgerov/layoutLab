import React, { forwardRef } from "react";
import "./AdviceContent.css";
import svg1 from "../../assets/2_1.svg";
import svg2 from "../../assets/2_2.svg";
import { DoItem } from "./DoItem.tsx";

import ImageWaiting from "../../assets/waiting.png";
import ImageTruck from "../../assets/delivery-truck.png";
import ImageSecure from "../../assets/secure.png";
import ImageMoney from "../../assets/money-bags.png";

const doList = [
  {
    imgClass: "curs_img",
    title: "Прочитай задание внимательно",
    description: "Думаю у тебя не займет это больше двух-трех минут",
    img: ImageWaiting,
  },
  {
    imgClass: "curs_img1",
    title: "Изучи весь макет заранее",
    description:
      "Подумай как это будет работать на разных разрешениях и при скролле",
    img: ImageTruck,
  },
  {
    imgClass: "curs_img2",
    title: "Сделай хорошо",
    description: "Чтобы мы могли тебе доверить подобные задачи в будущем",
    img: ImageSecure,
  },
  {
    imgClass: "curs_img3",
    title: "Получи предложение",
    description:
      "Ну тут все просто, не я придумал правила, но думаю так и будет)))",
    img: ImageMoney,
  },
];

export const AdviceContent = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="container">
      <div className="works">
        <div className="works_title">Как это работает</div>
        <div className="groap">
          {doList.map((curs, index) => (
            <div className="wrapper_position" key={index}>
              <DoItem
                img={curs.img}
                title={curs.title}
                description={curs.description}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="procent">
        <div className="procent_wrapper">
          <div className="procent_inner">
            <h3>Круто, ты дошел до третьего блока</h3>
            <div className="procent_title">
              63% опрошенных пользовались кредитами из-за того, что не могли
              покрыть непредвиденные расходы свыше 15 000 ₽.
            </div>
            <div className="procent_item">
              Доступ к заработанным деньгам помогает отказаться от кредитов и
              экономить деньги на процентах и штрафах.
            </div>
          </div>
          <div className="procent_wrapper_img">
            <img src={svg2} alt="truck on background" className="img" />
            <img src={svg1} alt="human with phone" className="img_hero img" />
          </div>
        </div>
      </div>
    </div>
  );
});
