import React from "react";
import { useParams } from "react-router-dom";

function Browse() {
  const { id } = useParams();
  return (
    <div>
      <h1>Browse Page {id}</h1>
    </div>
  );
}

export default Browse;
