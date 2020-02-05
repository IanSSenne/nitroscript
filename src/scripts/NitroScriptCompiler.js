import { nullify } from "./util.js";
import { NitroScriptConfig } from "./const";
import { NitroScriptMappedMemory } from "./NitroScriptMappedMemory";
export class NitroScriptCompiler extends null {
    constructor(isModule) {
        super();
        this[NitroScriptConfig] = nullify({
            isModule: isModule || false
        });
        this[NitroScriptMappedMemory.Identifier] = new NitroScriptMappedMemory();
    }
    compile() { }
}
