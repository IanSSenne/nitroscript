import { NitroScript } from "./NitroScript";
export class NitroScriptScriptLoader extends null {
    constructor(src, el) {
        super();
        this.HTMLScriptTag = el;
        this.NitroScript = null;
        this.ready = false;
        fetch(src)
            .then(raw => raw.text())
            .then(code => {
                this.NitroScript = new NitroScript(code, el);
                this.ready = true;
            });
    }
}
