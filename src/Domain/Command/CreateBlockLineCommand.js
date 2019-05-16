export default class CreateBlockLineCommand {
  constructor(blockId, title) {
    if (typeof blockId === 'undefined' || !Number.isInteger(blockId)) {
      throw Error('blockId not a number')
    }
    if (typeof title === 'undefined' || !title instanceof String) {
      throw Error('title is not a string')
    }
    this.blockId = blockId
    this.title = title
  }
}