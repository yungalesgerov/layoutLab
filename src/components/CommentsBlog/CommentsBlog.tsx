import React from "react";
import "./info.css";
import { CommentsBlogCard } from "./CommentsBlogCard";

export const CommentsBlog: React.FC = () => {
  const textContent =
    "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах";

  return (
    <div className="fon">
      <div className="container1">
        <div className="text_item1">
          <CommentsBlogCard
            title="Опрошенных пользовались микрокредитами"
            content={textContent}
          />
          <CommentsBlogCard
            title="Опрошенных пользовались микрокредитами"
            content={textContent}
          />
        </div>
        <div className="text_item2">
          <CommentsBlogCard
            title="Опрошенных пользовались микрокредитами"
            content={textContent}
          />
          <CommentsBlogCard
            title="Опрошенных пользовались микрокредитами"
            content={textContent}
          />
        </div>
      </div>
    </div>
  );
};
