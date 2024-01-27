import { useState } from 'react'
import "../App.css"
export default function Counter () {
    const [count, setCount] = useState(0)
    function increment() {
        setCount((prevCount) => prevCount + 1);
    }

    function decrement() {
        if (count<=0) {
            setCount(0);
        }
        else {
            setCount((prevCount) => prevCount - 1);
        }
    }

    return (
        <div id="counter-div">
            <h1>Counter  Value: <span id='span'>{count}</span></h1>
            <div>
              <button id="increment" onClick = {increment}>Increment</button>
              <button  id ="decrement" onClick = {decrement}>Decrement</button>
            </div>
        </div>
    );
}