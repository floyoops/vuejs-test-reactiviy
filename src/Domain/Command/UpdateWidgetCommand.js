export default class UpdateWidgetCommand {
  constructor(blockId, blockLineId, widgetId) {
    if (typeof blockId === 'undefined' || !Number.isInteger(blockId)) {
      throw Error('blockId not a number')
    }
    if (typeof blockLineId === 'undefined' || !Number.isInteger(blockLineId)) {
      throw Error('blockId not a number')
    }
    if (typeof widgetId === 'undefined' || !Number.isInteger(widgetId)) {
      throw Error('widgetId not a number')
    }
    this.blockId = blockId
    this.blockLineId = blockLineId
    this.widgetId = widgetId
  }
}