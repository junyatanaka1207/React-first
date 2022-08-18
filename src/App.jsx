import React, { useEffect, useState } from "react"; //Reactを使う場合のお作法 rezctのコンポーネントを各場合に必ず必要
//import ColorfulMessage from "./component/Colorfulmessage"; exportの仕方によっては下のようにしても読み込める
import { ColorfulMessage } from "./component/Colorfulmessage";

//reactでは関数をつかって画面の要素であるコンポーネントを表現する
//JSX記法では、return の中身を1つのタグでまとめる必要がある　でないとエラー
//　　　　　　　　↓
//しかし。毎回<div>で囲むと不要な<div>が毎度レンダリングされてしまう。
//　　　　　　　　↓
//ここで、エラーを回避するためだけの　React.flagmentまたは＜＞を用いる

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountup = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      {/* CSsを充てる➀外側{}はJasvascriptをかく宣言、内側はJavaScriptのオブジェクトの意味*/}
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="blue" message="how are you?" />
      {/* 異なる書き方*/}
      {/* <ColorfulMessage color="blue">how are you?</ColorfulMessage>*/}
      {/* この時、ColorfulMessageの中では、props.childrenで指定する*/}
      <ColorfulMessage color="pink" message="world" />
      {/*reactでボタンなどに、イベントをふよするときは、キャメルケースで関数を渡す。　キャメル＝｛関数名｝*/}
      <button onClick={onClickCountup}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^)/</p>}
    </>
  );
};

//このファイルが他でも使えるようになる
export default App;
