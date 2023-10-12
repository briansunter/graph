import React, { useState } from 'preact/compat';

function Counter(){
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;