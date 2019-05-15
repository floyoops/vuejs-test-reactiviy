import DeleteBlockCommand from './DeleteBlockCommand'
import BlocksStore from '../../Data/BlocksStore'

export default class DeleteBlockCommandHandler {
    constructor(blockStore) {
        if (blockStore instanceof BlocksStore) {
            this.blockStore = blockStore
        } else {
            throw 'Bad instance blocksStore'
        }
    }

    handle(command) {
        if (command instanceof DeleteBlockCommand) {
            let i = this.getIndex(command.blockId);
            console.log('i', i);
            if (i === null) {
                return false
            }
            console.log('Delete a', this.blockStore.data[i])
            delete this.blockStore.data[i]
            console.log('Delete b', i, command, this.blockStore)
        } else {
            throw 'Bad instance command'
        }
    }

    getIndex(blockId) {
        let index = null
        this.blockStore.data.forEach((block, key) => {
            if (block.id === blockId) {
                console.log('kkk', key)
                index = key
            }
        })
        return index
    }
}
