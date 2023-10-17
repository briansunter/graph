
import React from 'preact/compat';

interface Foo {
    name: string;
}

export default function Component() {
    return <div><h1>foobar</h1> 
    <button onClick={() => {
        console.log('clicked');
    }}> Click me </button>
    
    </div>
}
