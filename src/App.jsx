import { useState } from "react"
import './App.css'
import CountBox from "./components/CountBox";
import counterStore from "./stores/counterStore";

function App() {
  const { count, increse, increaseBy, decrease, decreaseBy, reset } = counterStore();
  return (
    <div className="App">
      <div className="counter-box">
        <h1>Count: {count}</h1>
        <div className="button-group">
          <button onClick={()=> decreaseBy(10)}>10씩 감소</button>
          <button onClick={decrease}>1씩 감소</button>
          <button onClick={reset}>초기화</button>
          <button onClick={increse}>1씩 증가</button>
          <button onClick={() => increaseBy(10)}>10씩 증가</button>
        </div>
      </div>
    </div>
  )
}

export default App
