import BlocksStore from "../../Data/BlocksStore";
import UpdateWidgetCommand from "./UpdateWidgetCommand";

export default class UpdateWidgetCommandHandler {
  constructor(blockStore) {
    if (blockStore instanceof BlocksStore) {
      this.blockStore = blockStore
    } else {
      throw 'Bad instance blocksStore'
    }
  }

  handle(command) {
    if (command instanceof UpdateWidgetCommand) {
      let blockIndex = this.getIndexBlock(command.blockId)
      if (blockIndex === null) {
        throw new Error('Block index not found')
      }
      let block = this.blockStore.data[blockIndex]
      if (block === null) {
        throw new Error('Block not found')
      }
      let blockLineIndex = this.getBlockLineIndex(block, command.blockLineId)
      if (blockLineIndex === null) {
        throw new Error('BlockLineIndex not found')
      }
      let blockLine = block.lines[blockLineIndex]
      blockLine.widget.title = blockLine.widget.title + ' a';
    } else {
      throw new Error('Bad instance command')
    }
  }

  getBlockLineIndex(block, blockLineId) {
    if (typeof block.lines === 'undefined') {
      return null
    }
    let r = null
    block.lines.forEach((blockLine, index) => {
      if (blockLine.id === blockLineId) {
        r = index
      }
    })
    return r
  }

  getIndexBlock(blockId) {
    let r = null
    this.blockStore.data.forEach((block, index) => {
      if (block.id === blockId) {
        r = index
      }
    })
    return r
  }
}