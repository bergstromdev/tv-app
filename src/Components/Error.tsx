import * as React from "react";
import { Link } from "@reach/router";

interface Props {
  message?: string;
}

const Error: React.FC<Props> = ({ message }) => {
  return (
    <div>
      <h1>Something went wrong...</h1>
      {message && <p>{message}</p>}
      <Link to="/">Back to Start</Link>
    </div>
  );
};

export default Error;
