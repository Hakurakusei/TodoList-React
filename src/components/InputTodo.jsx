import React, { useState } from "react";

const InputTodo = (props) => {
  const [todo, setTodo] = useState("");

  const onClickAdd = () => {
    if (todo === "") return;
    const newTodo = [...props.incomplete, todo];
    props.setIncomplete(newTodo);
    setTodo("");
  };

  return (
    <div className="input-area">
      <input
        type="text"
        value={todo}
        onChange={(el) => setTodo(el.target.value)}
        placeholder="やることを入力"
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};

export default InputTodo;
