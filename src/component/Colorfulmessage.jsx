import React from "react";

export const ColorfulMessage = (props) => {
  //分割代入
  //props.colorと書くのがめんどくさい時
  //const{color,children} = props;と書くと略してOK

  const contentStyle2 = {
    color: props.color,
    //分割代入した場合
    //color,　のみでOK
    fontSize: "18px"
  };

  return <p style={contentStyle2}>{props.message}</p>;
};

//export default ColorfulMessage;
