export default class DeleteBlockLineCommand {
    constructor(blockId, blockLineId) {
        if (typeof blockId === 'undefined' || !Number.isInteger(blockId)) {
            throw Error('blockId not a number')
        }
        if (typeof blockLineId === 'undefined' || !Number.isInteger(blockLineId)) {
            throw Error('blockId not a number')
        }
        this.blockId = blockId
        this.blockLineId = blockLineId
    }
}
