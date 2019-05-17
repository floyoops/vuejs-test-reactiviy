<template>
    <div class="one-child">
        <span>{{ block.id }}</span>
        <span class="blockTitle">{{ block.title }}</span>
        <button @click="deleteBlock(block.id)">X</button>
        <myForm v-on:submitForm="createBlockLine"></myForm>
        <ChildLine v-for="blockLine in block.lines" :key="blockLine.id" :initialBlockLine="blockLine" :initialBlock="block"></ChildLine>
    </div>
</template>

<script>
    import ChildLine from './ChildLine'
    import DeleteBlockCommand from '../Domain/Command/DeleteBlockCommand'
    import myForm from "./myForm";
    import CreateBlockLineCommand from "../Domain/Command/CreateBlockLineCommand";

    export default {
        name: 'Child1',
        props: {initialBlock: {type: Object}},
        data() {
          return  { block: this.initialBlock}
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
    .blockTitle {
        font-weight: bold;
    }
    .one-child {
        background-color: aqua;
        min-height: 10px;
        padding: 10px;
        margin: 10px;
    }
    .one-child button {
        float: right;
    }

</style>
