import DeleteBlockCommand from './DeleteBlockCommand'
import BlocksStore from '../../Data/BlocksStore'

export default class DeleteBlockCommandHandler {
    constructor(blockStore) {
        if (blockStore instanceof BlocksStore) {
            this.blockStore = blockStore
        } else {
            throw new Error('Bad instance blocksStore')
        }
    }

    handle(command) {
        if (command instanceof DeleteBlockCommand) {
            let i = this.getIndex(command.blockId);
            if (i === null) {
                return false
            }
            this.blockStore.data.splice(i, 1)
        } else {
            throw new Error('Bad instance command')
        }
    }

    getIndex(blockId) {
        let index = null
        this.blockStore.data.forEach((block, key) => {
            if (block.id === blockId) {
                index = key
            }
        })
        return index
    }
}
