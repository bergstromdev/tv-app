import * as React from "react";

interface Props {
  id: number;
}

const Cast: React.FC<Props> = ({ id }) => {
  return (
    <div>
      <h2>Cast</h2>
      <p>{id}</p>
    </div>
  );
};

export default Cast;
