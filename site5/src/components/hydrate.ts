import React from "preact/compat";
export default function (id: string, component: any, props: any = {}) {
  const domNode = document.getElementById(id);
  if (!domNode) {
    throw new Error(`Could not find element with id ${id}`);
  }

  const vnode = React.createElement(component, props);
  React.hydrate(vnode, domNode);
}