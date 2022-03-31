import React, { useState } from "react";
import "./styles.css";
import InputTodo from "./components/InputTodo";
import IncompleteTodoArea from "./components/IncompleteTodoArea";
import CompleteTodoArea from "./components/CompleteTodoArea";

const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "早起き",
    "プーチン暗殺"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["お風呂掃除"]);

  return (
    <>
      <InputTodo
        incomplete={incompleteTodos}
        setIncomplete={setIncompleteTodos}
      />
      <IncompleteTodoArea
        incomplete={incompleteTodos}
        setIncomplete={setIncompleteTodos}
        complete={completeTodos}
        setComplete={setCompleteTodos}
      />
      <CompleteTodoArea
        incomplete={incompleteTodos}
        setIncomplete={setIncompleteTodos}
        complete={completeTodos}
        setComplete={setCompleteTodos}
      />
    </>
  );
};

export default App;
