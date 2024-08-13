import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to= "/"
        className="bg-orange-500 text-white p-2 rounded"
      >
        Go back to the main page.
      </Link>
    </div>
  );
}

export default Notfound;
