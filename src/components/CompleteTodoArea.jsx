import React from "react";

const CompleteTodoArea = (props) => {
  const onClickBack = (index) => {
    const newCompleteTodo = [...props.complete];
    newCompleteTodo.splice(index, 1);

    const newIncompleteTodo = [...props.incomplete, props.complete[index]];

    props.setComplete(newCompleteTodo);
    props.setIncomplete(newIncompleteTodo);
  };

  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {props.complete.map((todo, id) => {
          return (
            <div className="list-row">
              <li>{`${id + 1} : ${todo}`}</li>
              <button onClick={() => onClickBack(id)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteTodoArea;
