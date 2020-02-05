const info = {
    log: console.log.bind(
        console,
        `%c NitroScript %c log %c `,
        'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        `background: gray; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff`,
        'background:transparent'
    ),
    error: console.log.bind(
        console,
        `%c NitroScript %c error %c `,
        'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        `background: rgb(190, 0, 0); padding: 1px; border-radius: 0 3px 3px 0;  color: #fff`,
        'background:transparent'
    ),
    warn: console.log.bind(
        console,
        `%c NitroScript %c warn %c `,
        'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        `background: rgb(207, 162, 0); padding: 1px; border-radius: 0 3px 3px 0;  color: #fff`,
        'background:transparent'
    )
};
export class NitroScriptMappedMemory {
    constructor() {
        this.memStack = [];
        this.push({
            Buffer,
            info
        });
    }
    push(initializer = {}) {
        this.memStack.push(new Map(Object.keys(initializer).map(_ => [_, initializer[_]])));
    }
    pop() {
        this.memStack.pop();
    }
    get(n) {
        return this.find(n).get(n);
    }
    set(n, v) {
        return this.find(n).set(n, v);
    }
    find(n) {
        for (let i = this.memStack.length - 1; i > 0; i--) {
            if (this.memStack[i].has(n))
                return this.memStack[i];
        }
        return this.memStack[0];
    }
}
NitroScriptMappedMemory.Identifier = Symbol("NitroScriptMappedMemory");
