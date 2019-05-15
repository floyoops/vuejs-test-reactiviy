<template>
    <div id="Child1" class="one-child">
        <span>{{ block.title }}</span>
        <button @click="deleteBlock(block.id)">X</button>
    </div>
</template>

<script>
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
</style>
