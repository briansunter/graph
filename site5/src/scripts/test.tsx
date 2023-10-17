import React from 'preact/compat';
import h from 'vhtml';
interface Foo {
    name: string;
}

export default function Component(props: Foo) {
    return <div><h1>Hello {props.name|| "World"} </h1> 
    <button onClick={() => {
        console.log('clicked');
    }}> Click me</button>
    </div>
}
