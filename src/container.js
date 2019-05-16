import DeleteBlockCommandHandler from "./Domain/Command/DeleteBlockCommandHandler";
import BlocksStore from "./Data/BlocksStore";
import CommandBus from "./libs/commandBus"
import myData from './Data/myData'
import CreateBlockCommandHandler from "./Domain/Command/CreateBlockCommandHandler";

export default class Container {
  constructor() {
    this.commandBus = CommandBus
    let blockStore = new BlocksStore(myData.blocks)
    this.deleteBlockCommandHandler = new DeleteBlockCommandHandler(blockStore)
    this.createBlockCommandHandler = new CreateBlockCommandHandler(blockStore)
    this.commandListen()
  }

  commandListen() {
    this.commandBus.$on('DeleteBlockCommand', (command) => {
      this.deleteBlockCommandHandler.handle(command)
    })
    this.commandBus.$on('CreateBlockCommand', (command) => {
      this.createBlockCommandHandler.handle(command)
    })
  }
}
