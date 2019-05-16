<template>
    <form id="myForm" @submit.prevent="checkForm">
        <label for="Add">Title</label>
        <input type="text" id="Add" v-model="title">
        <button type="submit">Add</button>
    </form>
</template>

<script>
    import CreateBlockCommand from "../Domain/Command/CreateBlockCommand";

    export default {
        name: 'myForm',
        data: () => ({
          title: null
        }),
        inject: ['commandBus'],
        methods: {
            checkForm() {
                if (this.title) {
                  this.commandBus.$emit('CreateBlockCommand', new CreateBlockCommand(this.title))
                  this.title = null
                }
            }
        }
    }
</script>

<style>
    #myForm {
        margin: 10px;
    }
    input {
        margin: 10px;
    }

</style>
