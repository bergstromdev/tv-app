import * as React from "react";
import { Show } from "../../Models/result";
import placeholder from "../../Lib/placeholder.jpg";

interface Props {
  details: Show;
}

const Main: React.FC<Props> = ({ details }) => {
  const summary = () => ({ __html: details.summary });
  return (
    <div className="detail__main__container">
      <img
        className="detail__main-img"
        src={details.image ? details.image.medium : placeholder}
        alt={details.name}
      />
      <div
        className="detail__main-summary"
        dangerouslySetInnerHTML={summary()}
      />
    </div>
  );
};

export default Main;
