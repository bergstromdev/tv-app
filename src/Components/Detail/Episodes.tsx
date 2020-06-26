import * as React from "react";

interface Props {
  id: number;
}

const Episodes: React.FC<Props> = ({ id }) => {
  return (
    <div>
      <h2>Episodes</h2>
      <p>{id}</p>
    </div>
  );
};

export default Episodes;
