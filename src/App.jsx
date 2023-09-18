import { useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      question: "What language is React based on?",
      answer: "JavaScript"
    },
    {
      question: "What are the building blocks of React app?",
      answer: "Components"
    },
    {
      question: "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX"
    },
    {
      question: "How to pass data from parent to child components?",
      answer: "Through Props"
    },
    {
      question: "How to give components memory?",
      answer: "useState Hook"
    },
    {
      question: "What do we call an input element that is completely synchronised with state?",
      answer: "controlled component"
    },
  ]

  const [dataArray, setDataArray] = useState(data)

  function hoverHandler(index) {
    console.log(index)
    const hoverData = [...dataArray]
    // console.log(hoverData);
    hoverData[index].question = dataArray[index].answer
    setDataArray(hoverData)
  }

  function hoverLeaveHandler () {
    setDataArray(data)
  }

  return (
    <div className="container">
      {
        dataArray.map((item, index) => (
          <div className="card" onMouseOver={() => hoverHandler(index)} onMouseLeave= {hoverLeaveHandler}>
            <h2>{item.question}</h2>
          </div>
        ))
      }
    </div>
  );
}

export default App;
