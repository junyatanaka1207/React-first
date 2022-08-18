import React from "react"; //Reactを使う場合のお作法 rezctのコンポーネントを各場合に必ず必要
import ReactDom from "react-dom"; //htmlにコンポーネントを反映させる必要があるため　react^domがいる

import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));
