// import { html, Component } from 'htm/preact';
import React from 'preact/compat';

interface Foo {
    name: string;
}

console.log('testing');


export function Component(){
    return <h1>foobar</h1>
}


export default function(id: string) {
    const domNode = document.getElementById(id);
    if (!domNode) {
        throw new Error(`Could not find element with id ${id}`);
        }
    React.render(Component(), domNode);
  }