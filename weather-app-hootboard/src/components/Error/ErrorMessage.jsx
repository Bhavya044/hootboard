import React from "react";
import "./error.css";

function ErrorMessage({ message }) {
  return (
    <div className="error-container" role="alert">
      <strong className="error-label">Error:</strong>
      <span className="error-message">{message}</span>
    </div>
  );
}

export default ErrorMessage;
