const Processor = require('../jscad/processor')

class BlockCad {
    constructor() {
        this.gProcessor = null;
    }

    init(domId) {
        this.gProcessor = new Processor(document.getElementById(domId));
    }

    render(code) {
        this.gProcessor.setJsCad(code);
    }
}

window.BlockCad = BlockCad;
module.exports = BlockCad;
