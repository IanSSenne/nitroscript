export const NitroScriptEnv = new (class NitroScriptEnv {
    constructor() {
        this.modules = {};
    }
    getModule(module, callback) {
        if (this.modules[module]) {
            return Promise.resolve(this.modules[module].default);
        }
    }
})();
