import React, {useState} from 'react';

const App = () => {
    let [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(prew => --prew)}>increment</button>
            <button onClick={() => setCounter(prew => ++prew)}>decrement</button>
        </div>
    );
};

export default App;
