import fw from "ians-fw";
let Test = () => <span></span>
import("./test2.jsx").then((module) => { Test = module.default; });
function test() {
    return <div>
        <Test></Test>
    </div>
};
console.log(test().element());
setTimeout(() => console.log(test().element()), 1000);

