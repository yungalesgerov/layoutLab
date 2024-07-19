import React, { useRef } from "react";
import "./App.css";

import { Home } from "./pages/Home/Home";
import { Layout } from "./components/Layout";

export const App = () => {
  const adviceRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="App">
      <Layout
        adviceRef={adviceRef}
        sliderRef={sliderRef}
        faqRef={faqRef}
        formRef={formRef}
      >
        <Home
          adviceRef={adviceRef}
          sliderRef={sliderRef}
          faqRef={faqRef}
          formRef={formRef}
        />
      </Layout>
    </div>
  );
};
