import React from "react";

const IncompleteTodoArea = (props) => {
  const onClickDelete = (index) => {
    const newTodo = [...props.incomplete];
    newTodo.splice(index, 1);
    props.setIncomplete(newTodo);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodo = [...props.incomplete];
    const newCompleteTodo = [...props.complete, props.incomplete[index]];

    newIncompleteTodo.splice(index, 1);

    props.setIncomplete(newIncompleteTodo);
    props.setComplete(newCompleteTodo);
  };

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {props.incomplete.map((todo, id) => {
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
  );
};

export default IncompleteTodoArea;
