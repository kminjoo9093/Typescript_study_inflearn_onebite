import React, { useContext, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

export default function Edit() {
  const [text, setText] = useState("");
  const dispatch = useTodoDispatch();

  const onChangeInput = (e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onCreate(text);
    // onClickAdd(text);
    setText("");
  }

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
