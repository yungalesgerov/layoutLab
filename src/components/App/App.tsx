import React, { useRef } from "react";
import "./App.css";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Slider from "../Slider/Slider";
import Accordion from "../Accordion/Accordion";
import Info from "../Info/Info";
import Futer from "../Futer/Futer";
import Link from "../Link/Link";

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
      {/* <Header
        scrollToBody={scrollToBody}
        scrollToSlider={scrollToSlider}
        scrollToAccordion={scrollToAccordion}
        scrollToFuter={scrollToFuter}
      /> */}
      <Body ref={bodyRef} />
      <div>
        <Slider ref={sliderRef} />
      </div>
      <Accordion ref={accordionRef} />
      <Info />
      {/* <Futer ref={futerRef} /> */}
      <Link />
    </div>
  );
};

export default App;
