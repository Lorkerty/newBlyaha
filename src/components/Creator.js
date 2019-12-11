import React from "react";

function Creator(props) {
  const { creator } = props;
  return (
    <div className="card" width="200" height="auto">
      <img src={creator.img} width="300" height="300" alt={creator.name} />
    </div>
  );
}
export default Creator;
