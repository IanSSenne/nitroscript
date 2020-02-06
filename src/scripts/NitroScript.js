import { NitroScriptEnv } from "./NitroScriptEnv";
import { NitroScriptCompiler } from "./NitroScriptCompiler";
export class NitroScript extends null {
    constructor(source, el) {
        super();
        this.element = el;
        this.currentScript = new NitroScriptCompiler(false, el.src);
        this.currentScript.compile(source);
    }
    loadModule(src) {
        let resolve, p = new Promise((resolve, reject) => {
            resolve = resolve;
        });
        NitroScriptEnv.getModule(src, module => resolve(module));
        return p;
    }
}
