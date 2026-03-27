import { useContext, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {
}

export default function Editor(props: Props) {
  const [text, setText] = useState("");

  const dispatch = useTodoDispatch();

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
