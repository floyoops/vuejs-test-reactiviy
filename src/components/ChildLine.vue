<template>
    <div>
    <button @click="deleteBlockLine(blockId, ChildLine.id)">X</button>
    <div class="childLine">{{ ChildLine.subTitle }}</div>
    </div>
</template>

<script>
    import DeleteBlockLineCommand from "../Domain/Command/DeleteBlockLineCommand";

    export default {
      name: 'ChildLine',
      props: {
        blockId: {
          type: Number
        },
        ChildLine: {
          type: Object
        }
      },
      inject: ['commandBus'],
      methods: {
          deleteBlockLine(blockId, blockLineId) {
              this.commandBus.$emit('DeleteBlockLineCommand', new DeleteBlockLineCommand(blockId, blockLineId))
          }
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
</style>
