import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
  adviceRef: React.RefObject<HTMLDivElement>;
  sliderRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
  formRef: React.RefObject<HTMLDivElement>;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  adviceRef,
  sliderRef,
  faqRef,
  formRef,
}) => {
  return (
    <div className="layout">
      <Header
        adviceRef={adviceRef}
        sliderRef={sliderRef}
        faqRef={faqRef}
        formRef={formRef}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
