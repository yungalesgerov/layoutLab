import { useState, useRef, useEffect } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <button
        className={`accordion-button ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        {title}
        <span className={`icon ${isOpen ? "open" : ""}`}>+</span>
      </button>
      <div
        ref={contentRef}
        className={`accordion-content ${isOpen ? "open" : ""}`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};
