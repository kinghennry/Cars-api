import React from "react";
import { RevolvingDot } from "react-loader-spinner";
import "./cars.css";
function Loading() {
  return (
    <div className="loading">
      <RevolvingDot
        type="Puff"
        color="hsl(0, 0%, 52%)"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export default Loading;
