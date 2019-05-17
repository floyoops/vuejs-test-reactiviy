<template>
    <div class="widget">
        <span>{{ widget.id }}</span>
        <span>{{ widget.title }}</span>
        <button @click="update">UP</button>
    </div>
</template>

<script>
    import UpdateWidgetCommand from "../Domain/Command/UpdateWidgetCommand";

    export default {
        props: {
          initialBlock: {type: Object},
          initialBlocKLine: {type: Object},
          initialWidget: {type: Object}
        },
        data() {
          return {
            block: this.initialBlock,
            blockLine: this.initialBlocKLine,
            widget: this.initialWidget
          }
        },
        inject: ['commandBus'],
        methods: {
          update() {
            this.commandBus.$emit('UpdateWidgetCommand', new UpdateWidgetCommand(
              this.block.id,
              this.blockLine.id,
              this.widget.id
            ))
          }
        }
    }
</script>

<style>
    .widget {
        background-color: burlywood;
        padding: 4px;
        margin: 4px;
        margin-top: 8px;
    }
</style>