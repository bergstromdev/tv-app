import * as React from "react";
import { Link } from "@reach/router";
import Main from "./Main";
import Episodes from "./Episodes";
import { Show } from "../../Models/result";
import Cast from "./Cast";

export enum Views {
  Main = "main",
  Episodes = "episodes",
  Cast = "cast",
}

interface Props {
  details: Show;
}

const Detail: React.FC<Props> = ({ details }) => {
  const [view, setView] = React.useState(Views.Main);
  const id = details.id;
  return (
    <div className="detail__container">
      <Link to="/">Back to Search</Link>
      <h1>{details.name}</h1>
      <div className="detail__view-selector">
        <button
          className={view === Views.Main ? "active" : ""}
          onClick={() => setView(Views.Main)}
        >
          Main
        </button>
        <button
          className={view === Views.Episodes ? "active" : ""}
          onClick={() => setView(Views.Episodes)}
        >
          Episodes
        </button>
        <button
          className={view === Views.Cast ? "active" : ""}
          onClick={() => setView(Views.Cast)}
        >
          Cast
        </button>
      </div>
      {view === Views.Main && <Main details={details} />}
      {view === Views.Episodes && <Episodes id={id} />}
      {view === Views.Cast && <Cast id={id} />}
    </div>
  );
};

export default Detail;
