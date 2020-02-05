import { NitroScriptCompiler } from "./NitroScriptCompiler";
export class NitroScriptModule extends null {
    constructor(source, el = null) {
        super();
        this.element = el; //will prob be null due to modules not being the norm for inline script refs
        this.currentScript = new NitroScriptCompiler(true);
        this.currentScript.compile(source);
    }
}
