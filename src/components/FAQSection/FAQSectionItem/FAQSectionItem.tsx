import React, { useState, useRef, useEffect } from "react";

interface FAQSectionItemProps {
  title: string;
  content: string;
}

export const FAQSectionItem: React.FC<FAQSectionItemProps> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const handleSwitch = () => {
    setIsOpen((prev) => !prev);
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
        onClick={handleSwitch}
      >
        {title}
        <div>
          <span className={`icon ${isOpen ? "open" : ""}`}>+</span>
        </div>
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
