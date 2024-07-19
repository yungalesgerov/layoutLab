import React, { forwardRef } from "react";
import "./Body.css";
import svg1 from "../../assets/2_1.svg";
import svg2 from "../../assets/2_2.svg";

const Body = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="container">
      <div className="works">
        <div className="works_title">Как это работает</div>
        <div className="groap">
          <div className="wrapper_position">
            <div className="curs">
              <div className="curs_img curs_img"></div>
              <div>
                <div className="curs_title">Прочитай задание внимательно</div>
                <div className="curs_item">
                  Думаю у тебя не займет это больше двух-трех минут
                </div>
              </div>
            </div>
            <div className="curs">
              <div className="curs_img1 curs_img"></div>
              <div>
                <div className="curs_title">Изучи весь макет заранее</div>
                <div className="curs_item">
                  Подумай как это будет работать на разных разрешениях и при
                  скролле
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper_position">
            <div className="curs">
              <div className="curs_img2 curs_img"></div>
              <div>
                <div className="curs_title">Сделай хорошо</div>
                <div className="curs_item">
                  Чтобы мы могли тебе доверить подобные задачи в будущем
                </div>
              </div>
            </div>
            <div className="curs">
              <div className="curs_img3 curs_img"></div>
              <div>
                <div className="curs_title">Получи предложение</div>
                <div className="curs_item">
                  {
                    "Ну тут все просто, не я придумал правила, но думаю так и будет)))"
                  }
                </div>
              </div>
            </div>
          </div>
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
            <img src={svg2} alt="" className="img" />
            <img src={svg1} alt="" className="img_hero img" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Body;
