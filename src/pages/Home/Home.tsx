import React from "react";
import {
  AdviceContent,
  SliderReview,
  FAQSection,
  CommentsBlog,
  FormSection,
} from "../../components";

interface HomeProps {
  adviceRef: React.RefObject<HTMLDivElement>;
  sliderRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
  formRef: React.RefObject<HTMLDivElement>;
}

export const Home: React.FC<HomeProps> = ({
  adviceRef,
  sliderRef,
  faqRef,
  formRef,
}) => {
  return (
    <>
      <AdviceContent ref={adviceRef} />
      <SliderReview ref={sliderRef} />
      <FAQSection ref={faqRef} />
      <CommentsBlog />
      <FormSection ref={formRef} />
    </>
  );
};
