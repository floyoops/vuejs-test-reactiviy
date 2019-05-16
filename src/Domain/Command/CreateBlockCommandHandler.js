import CreateBlockCommand from "./CreateBlockCommand";
import BlocksStore from "../../Data/BlocksStore";

export default class CreateBlockCommandHandler
{
  constructor(blockStore) {
    if (blockStore instanceof BlocksStore) {
      this.blockStore = blockStore
    } else {
      throw 'Bad instance blocksStore'
    }
  }

  handle(command) {
    if (command instanceof CreateBlockCommand) {
      let newId = this.getNewId()
      let newBlock = Object.create({id: newId, title : command.title});
      this.blockStore.data.push(newBlock)
    } else {
      throw new Error('bad instance command')
    }
  }

  getNewId() {
    let lastBlock = this.blockStore.data[this.blockStore.data.length - 1];
    if (lastBlock) {
      return lastBlock.id + 1;
    }
    return 0
  }
}