import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "早起き",
    "プーチン暗殺"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["お風呂掃除"]);

  const onClickAdd = () => {
    if (todo === "") return;
    const newTodo = [...incompleteTodos, todo];
    setIncompleteTodos(newTodo);
    setTodo("");
  };

  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setIncompleteTodos(newTodo);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incompleteTodos];
    const newCompleteTodo = [...completeTodos, incompleteTodos[index]];

    newIncompleteTodo.splice(index, 1);

    setIncompleteTodos(newIncompleteTodo);
    setCompleteTodos(newCompleteTodo);
  };

  const onClickBack = (index) => {
    const newCompleteTodo = [...completeTodos];
    newCompleteTodo.splice(index, 1);

    const newIncompleteTodo = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodo);
    setIncompleteTodos(newIncompleteTodo);
  };

  return (
    <>
      <div className="input-area">
        <input
          type="text"
          value={todo}
          onChange={(el) => setTodo(el.target.value)}
          placeholder="やることを入力"
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, id) => {
            return (
              <div className="list-row">
                <li>{`${id + 1} : ${todo}`}</li>
                <button onClick={() => onClickComplete(id)}>完了</button>
                <button onClick={() => onClickDelete(id)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo, id) => {
            return (
              <div className="list-row">
                <li>{`${id + 1} : ${todo}`}</li>
                <button onClick={() => onClickBack(id)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
