
import React from 'preact/compat';

interface Foo {
    name: string;
}

// console.log('testing');

export function Component() {
    return <div><h1>foobar</h1> 
    <button onClick={() => {
        console.log('clicked');
    }}> Click me </button>
    
    </div>
}

export default function (id: string) {
    // Check if document is defined
        const domNode = document.getElementById(id);
        if (!domNode) {
            throw new Error(`Could not find element with id ${id}`);
        }

        React.hydrate(Component(), domNode);
}