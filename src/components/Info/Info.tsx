import React from "react";
import "./info.css";
import { InfoTextBlock } from "./InfoTextBlock";

export const Info: React.FC = () => {
  const textContent =
    "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах";

  return (
    <div className="fon">
      <div className="container1">
        <div className="text_item1">
          <InfoTextBlock
            title="Опрошенных пользовались микрокредитами"
            content={textContent}
          />
          <InfoTextBlock
            title="Опрошенных пользовались микрокредитами"
            content={textContent}
          />
        </div>
        <div className="text_item2">
          <InfoTextBlock
            title="Опрошенных пользовались микрокредитами"
            content={textContent}
          />
          <InfoTextBlock
            title="Опрошенных пользовались микрокредитами"
            content={textContent}
          />
        </div>
      </div>
    </div>
  );
};
