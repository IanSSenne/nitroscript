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
    compile(code, filename) {
        const result = [];
        let level = 0;
        const lines = code.trim().split("\n");
        lines.push("");
        for (const line of lines) {
            const indentation = line.match(/^([\s]+)/);
            if (indentation) indentation = indentation[1].length;
            else indentation = 0;
            if (level != indentation) {
                if (indentation < level) {
                    result.push("}");
                } else {
                    result.push("{");
                }
                level = indentation;
            }
            result.push(line);
        }
        if (level != 0) result.push("}");
        this.execute(result.join("\n"), filename);
    }
    execute(code, filename) {
        const script = document.createElement("script");
        script.src = URL.createObjectURL(new Blob(["(function(){", code, "})()\n", "//# sourceURL=NitroScript://", filename, ".compiled"]));
        document.head.appendChild(script);
        script.setAttribute("is", "nitroscript-compiled");
    }
}
