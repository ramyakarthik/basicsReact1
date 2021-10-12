import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [showMe, setShowMe] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowMe(!showMe)}>
        {showMe ? "Hide me" : "Show me"}
      </button>
      {showMe ? (
        <div>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
      ) : null}
    </div>
  );
}
