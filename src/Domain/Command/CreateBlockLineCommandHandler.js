import CreateBlockLineCommand from "./CreateBlockLineCommand";
import BlocksStore from "../../Data/BlocksStore";

export default class CreateBlockLineCommandHandler {
  constructor(blockStore) {
    if (blockStore instanceof BlocksStore) {
      this.blockStore = blockStore
    } else {
      throw 'Bad instance blocksStore'
    }
  }

  handle(command) {
    if (command instanceof CreateBlockLineCommand) {
      let blockId = command.blockId
      let block = this.findBlock(blockId)
      if (block === null) {
        throw Error('Block not found')
      }
      let indexBlock = this.getIndex(command.blockId)
      if (indexBlock === null) {
        throw Error('Index not found on block ' + blockId)
      }
      let newLineId = CreateBlockLineCommandHandler.getNewLineId(block)
      let newLine = {id: newLineId, subTitle: command.title}
      if (typeof block.lines === 'undefined') {
        block.lines =  Object.create([])
      }
      block.lines.push(newLine)
      this.blockStore.data[indexBlock] = block
    } else {
      throw new Error('Bad instance command')
    }
  }

  findBlock(blockId) {
    let block = null;
    this.blockStore.data.forEach((itemBlock) => {
      if (itemBlock.id === blockId) {
        block = itemBlock
      }
    })
    return block
  }

  static getNewLineId(Block) {
    if (typeof Block.lines === 'undefined') {
      return 0
    }
    let lastLine = Block.lines[Block.lines.length - 1];
    if (lastLine) {
      return lastLine.id + 1
    }
    return 0
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
