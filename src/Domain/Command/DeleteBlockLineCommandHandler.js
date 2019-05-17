import BlocksStore from "../../Data/BlocksStore";
import DeleteBlockLineCommand from "./DeleteBlockLineCommand";

export default class DeleteBlockLineCommandHandler {
    constructor(blockStore) {
        if (blockStore instanceof BlocksStore) {
            this.blockStore = blockStore
        } else {
            throw 'Bad instance blocksStore'
        }
    }

    handle(command) {
        if (command instanceof DeleteBlockLineCommand) {
            let blockId = command.blockId
            let blockLineId = command.blockLineId
            let blockIndex = this.getBlockIndex(blockId)
            if (blockIndex === null) {
                throw new Error('index of block ' + blockId + 'not found')
            }
            let block = this.getBlock(blockIndex)
            if (block === null) {
                throw new Error('block not found')
            }
            let blockLineIndex = this.getBlockLineIndex(block, blockLineId)
            if (blockLineIndex === null) {
                throw new Error('blockLineIndex not found')
            }
            block.lines.splice(blockLineIndex, 1)
            this.blockStore.data[blockIndex] = block
        } else {
            throw new Error('Bad instance command')
        }
    }

    getBlock(blockIndex) {
        let block = this.blockStore.data[blockIndex]
        if (typeof block === 'undefined' || block === null) {
            return null
        }
        return block
    }

    getBlockIndex(blockId) {
        let index = null
        this.blockStore.data.forEach((block, key) => {
            if (block.id === blockId) {
                index = key
            }
        })
        return index
    }

    getBlockLineIndex(block, blockLineId) {
        if (typeof block.lines === 'undefined') {
            return null
        }
        let index = null
        block.lines.forEach((line, key) => {
            if (line.id === blockLineId) {
                index = key
            }
        })
        return index
    }

}
