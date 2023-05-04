import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // 웹팩이 파일들을 자동으로 묶어준다. 따라서 index.html에 js링크가 없다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
