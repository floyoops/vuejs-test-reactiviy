import DeleteBlockCommandHandler from "./Domain/Command/DeleteBlockCommandHandler";
import BlocksStore from "./Data/BlocksStore";
import CommandBus from "./libs/commandBus"
import myData from './Data/myData'
import CreateBlockCommandHandler from "./Domain/Command/CreateBlockCommandHandler";
import CreateBlockLineCommandHandler from "./Domain/Command/CreateBlockLineCommandHandler";
import DeleteBlockLineCommandHandler from "./Domain/Command/DeleteBlockLineCommandHandler";
import UpdateWidgetCommandHandler from "./Domain/Command/UpdateWidgetCommandHandler";

export default class Container {
  constructor() {
    this.commandBus = CommandBus
    this.blockStore = new BlocksStore(myData.blocks)
    this.deleteBlockCommandHandler = new DeleteBlockCommandHandler(this.blockStore)
    this.createBlockCommandHandler = new CreateBlockCommandHandler(this.blockStore)
    this.createBlockLineCommandHandler = new CreateBlockLineCommandHandler(this.blockStore)
    this.deleteBlockLineCommandHandler = new DeleteBlockLineCommandHandler(this.blockStore)
    this.updateWidgetCommandHandler = new UpdateWidgetCommandHandler(this.blockStore)
    this.commandListen()
  }

  commandListen() {
    this.commandBus.$on('DeleteBlockCommand', (command) => {
      this.deleteBlockCommandHandler.handle(command)
    })
    this.commandBus.$on('CreateBlockCommand', (command) => {
      this.createBlockCommandHandler.handle(command)
    })
    this.commandBus.$on('CreateBlockLineCommand', (command) => {
      this.createBlockLineCommandHandler.handle(command)
    })
    this.commandBus.$on('DeleteBlockLineCommand', (command) => {
      this.deleteBlockLineCommandHandler.handle(command)
    })
    this.commandBus.$on('UpdateWidgetCommand', (command) => {
      this.updateWidgetCommandHandler.handle(command)
    })
  }
}
