import { NitroScriptModule } from "./NitroScriptModule";
export class NitroScriptModuleLoader extends null {
    constructor(src, el) {
        super();
        this.HTMLScriptTag = el;
        this.NitroScript = null;
        this.ready = false;
        fetch(src)
            .then(raw => raw.text())
            .then(code => {
                this.NitroScript = new NitroScriptModule(code, el);
                this.ready = true;
            });
    }
}
