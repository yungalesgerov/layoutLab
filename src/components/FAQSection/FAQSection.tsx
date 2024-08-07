import React, { useState, useRef, useEffect, forwardRef } from "react";
import "./FAQSection.css";
import { FAQSectionItem } from "./FAQSectionItem";

const items = [
  {
    title:
      "Подтверждено: сознание наших соотечественников не замутнено пропагандой?",
    content:
      "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
  },
  {
    title: "Прототип нового сервиса - это как трубный призыв?",
    content:
      "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
  },
  {
    title: "Частокол на границе продолжает удивлять?",
    content:
      "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
  },
  {
    title: "Очевидцы сообщают, что слышали грохот грома градущих изменений?",
    content:
      "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
  },
  {
    title:
      "И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?",
    content:
      "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
  },
  {
    title:
      "Нынче никто не может себе позволить инициировать треск разлетающихся скреп?",
    content:
      "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
  },
  {
    title: "Высококачественный прототип будущего проекта обнадёживает?",
    content:
      "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
  },
];

export const FAQSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="container">
      <div className="accordion">
        <h1>Вопросы и ответы</h1>
        <div className="accordion_wrapper">
          {items.map((item, index) => (
            <FAQSectionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
