import {useState} from "react";
import logo from './logo.svg';
import Another from "./Another";
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    function decrement() {
        setCount(count - 1)
    }

    function increment() {
        setCount(count + 1)
    }

    return (
        <div className="App">
            <header className="App-header">
                <Another name="Yo"></Another>
                <div>
                    <span>{count}</span>
                    <button onClick={decrement}>-</button>
                    <button onClick={increment}>+</button>
                </div>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    {3 + 5}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
