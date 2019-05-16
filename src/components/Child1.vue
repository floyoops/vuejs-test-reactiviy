<template>
    <div id="Child1" class="one-child">
        <span class="blockTitle">{{ block.title }}</span>
        <button @click="deleteBlock(block.id)">X</button>
        <ChildLine v-for="line in block.lines" :ChildLine="line"></ChildLine>
    </div>
</template>

<script>
    import ChildLine from './ChildLine'
    import DeleteBlockCommand from '../Domain/Command/DeleteBlockCommand'
    export default {
        name: 'Child1',
        props: {
            block: {
                type: Object
            }
        },
        inject: ['commandBus'],
        methods: {
            deleteBlock(blockId) {
                this.commandBus.$emit('DeleteBlockCommand', new DeleteBlockCommand(blockId))
            }
        },
        components: {
          ChildLine
        }
    }
</script>

<style>
    #Child1 {
        background-color: aqua;
    }
    #Child1 button {
        float: right;
    }
    .blockTitle {
        font-weight: bold;
    }
</style>
