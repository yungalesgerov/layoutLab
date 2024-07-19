import React, { useRef } from "react";
import "./App.css";
import {
  Header,
  Body,
  Slider,
  Accordion,
  Info,
  Futer,
  Link,
} from "../components";

export const App: React.FC = () => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const futerRef = useRef<HTMLDivElement>(null);

  const scrollToBody = () => {
    bodyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSlider = () => {
    sliderRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAccordion = () => {
    accordionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFuter = () => {
    futerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header
        scrollToBody={scrollToBody}
        scrollToSlider={scrollToSlider}
        scrollToAccordion={scrollToAccordion}
        scrollToFuter={scrollToFuter}
      />
      <Body ref={bodyRef} />
      <section className="slider_section">
        <Slider ref={sliderRef} />
      </section>
      <Accordion ref={accordionRef} />
      <Info />
      <Futer ref={futerRef} />
      <Link />
    </div>
  );
};
