import DeleteBlockCommandHandler from "./Domain/Command/DeleteBlockCommandHandler";
import BlocksStore from "./Data/BlocksStore";
import CommandBus from "./libs/commandBus"
import myData from './Data/myData'

export default class Container {
  constructor() {
    this.commandBus = CommandBus
    let blockStore = new BlocksStore(myData.blocks)
    this.deleteBlockCommandHandler = new DeleteBlockCommandHandler(blockStore)
    this.commandListen()
  }

  commandListen() {
    this.commandBus.$on('DeleteBlockCommand', (command) => {
      this.deleteBlockCommandHandler.handle(command)
    })
  }
}
