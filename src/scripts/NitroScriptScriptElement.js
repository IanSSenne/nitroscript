import { NitroScript } from "./NitroScript";
import { NitroScriptScriptLoader } from "./NitroScriptScriptLoader";
import { NitroScriptModuleLoader } from "./NitroScriptModuleLoader";
export class NitroScriptScriptElement extends HTMLScriptElement {
    constructor() {
        super();
        this.startTime = performance.now();
        this.ModuleLoader = null;
        this.ScriptLoader = null;
        this.NitroScript = null;
        if (this.hasAttribute("src")) {
            if (this.getAttribute("type") === "module") {
                this.ModuleLoader = new NitroScriptModuleLoader(this.getAttribute("src"), this);
                console.log("NitroScript took %fms to load and execute initial frame element %s", performance.now() - this.startTime, this.outerHTML);
            }
            else {
                this.ScriptLoader = new NitroScriptScriptLoader(this.getAttribute("src"), this);
                console.log("NitroScript took %fms to load and execute initial frame element %s", performance.now() - this.startTime, this.outerHTML);
            }
        }
        else {
            this.NitroScript = new NitroScript(this.innerHTML, this);
            console.log("NitroScript took %fms to load and execute initial frame element %s", performance.now() - this.startTime, this.outerHTML);
        }
        console.log(this.script);
    }
    get script() {
        if (this.ModuleLoader || this.ScriptLoader) {
            if (this.ModuleLoader) {
                if (this.ModuleLoader.ready) {
                    return this.ModuleLoader.NitroScript;
                }
            }
            else {
                if (this.ScriptLoader.ready) {
                    return this.ScriptLoader.NitroScript;
                }
            }
        }
        return this.NitroScript || null;
    }
    get loader() {
        return this.ModuleLoader || this.ScriptLoader || null;
    }
}
customElements.define("nitro-script", NitroScriptScriptElement, {
    extends: "script"
});
