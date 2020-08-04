import React from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Components/Item';
import check from "./img/check.png"
import dance from "./img/dance.png"
import doing from "./img/doing.png"
import gym from "./img/gym.png"
import eat from "./img/eat.png"


let todoList = [
  {
    source1: gym,
    task: "Gym",
    source2: check,
    status: "underline"
  },
  {
    source1: doing,
    task: "Bills",
    source2: doing,
    status: "underline"

  },
  {
    source1: eat,
    task: "Pizza",
    source2: check,
    status: "line-through"
  },
  {
    source1: doing,
    task: "JavaScript",
    source2: doing,
    status: "blue"
  },
  {
    source1: gym,
    task: "Project agency",
    source2: check,
    status: "blue"
  },
  {
    source1: gym,
    task: "Coffee",
    source2: check,
    status: "underline"
  }
]

function App() {
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <Item
        source1={gym}
        task={todoList[0].task}
        source2={check}
       status={todoList[0].status}
      />
      <Item
        source1={doing}
        task={todoList[1].task}
        source2={doing}
        status={todoList[1].status}
      />
      <Item
        source1={eat}
        task={todoList[2].task}
        source2={check}
        status={todoList[2].status}
      />
      <Item
        source1={doing}
        task={todoList[3].task}
        source2={doing}
        status={todoList[3].status}
      />
        <Item
        source1={doing}
        task={todoList[4].task}
        source2={doing}
        status={todoList[4].status}
      />
        <Item
        source1={doing}
        task={todoList[5].task}
        source2={doing}
        status={todoList[5].status}
      />
    </div>
  );
}

export default App;
