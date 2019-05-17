<template>
    <div>
        <button @click="deleteBlockLine(block, blockLine)">X</button>
        <div class="childLine">
            <span>{{ blockLine.id }} </span>
            <span>{{ blockLine.subTitle }}</span>
            <widget :initial-block="block" :initial-bloc-k-line="blockLine" :initial-widget="blockLine.widget"></widget>
        </div>
    </div>
</template>

<script>
    import DeleteBlockLineCommand from "../Domain/Command/DeleteBlockLineCommand";
    import Widget from './Widget'

    export default {
      name: 'ChildLine',
      props: {
        initialBlockLine: {type: Object},
        initialBlock: {type: Object}
      },
      data() {
        return {
          blockLine: this.initialBlockLine,
          block: this.initialBlock
        }
      },
      inject: ['commandBus'],
      methods: {
          deleteBlockLine(block, blockLine) {
            this.commandBus.$emit('DeleteBlockLineCommand', new DeleteBlockLineCommand(block.id, blockLine.id))
          }
      },
      components: {
        Widget: Widget
      }
    }
</script>

<style>
    .childLine {
        background-color: antiquewhite;
        text-align: left;
        padding: 2px;
        color: #2c3e50;
        margin-top: 6px
    }
    .childLine span:first-child {
        text-align: center;
        padding-right: 2px;
        margin-right: 8px;
        font-weight: lighter;
        border-right: 1px solid;
    }
</style>
