"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compat_1 = require("preact/compat");
function Counter() {
    const [count, setCount] = (0, compat_1.useState)(0);
    const increment = () => setCount(count + 1);
    return (h("div", null,
        h("p", null,
            "Count: ",
            count),
        h("button", { onClick: increment }, "Increment")));
}
exports.default = Counter;
