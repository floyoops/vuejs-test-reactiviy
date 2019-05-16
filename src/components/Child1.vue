<template>
    <div id="Child1" class="one-child">
        <span class="blockTitle">{{ block.title }}</span>
        <button @click="deleteBlock(block.id)">X</button>
        <myForm v-on:submitForm="createBlockLine"></myForm>
        <ChildLine v-for="line in block.lines" :ChildLine="line"></ChildLine>
    </div>
</template>

<script>
    import ChildLine from './ChildLine'
    import DeleteBlockCommand from '../Domain/Command/DeleteBlockCommand'
    import myForm from "./myForm";
    import CreateBlockLineCommand from "../Domain/Command/CreateBlockLineCommand";
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
            },
            createBlockLine(title) {
              this.commandBus.$emit('CreateBlockLineCommand', new CreateBlockLineCommand(this.block.id, title))
            }
        },
        components: {
          ChildLine,
          myForm
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
