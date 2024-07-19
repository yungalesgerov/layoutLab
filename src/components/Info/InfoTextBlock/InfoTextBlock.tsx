interface InfoTextBlockProps {
  title: string;
  content: string;
}

export const InfoTextBlock: React.FC<InfoTextBlockProps> = ({
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
