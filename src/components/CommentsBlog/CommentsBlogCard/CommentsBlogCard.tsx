import React from "react";

interface CommentsBlogCardProps {
  title: string;
  content: string;
}

export const CommentsBlogCard: React.FC<CommentsBlogCardProps> = ({
  title,
  content,
}) => {
  return (
    <div className="col">
      <div className="text1">{title}</div>
      <div className="text2">{content}</div>
    </div>
  );
};
