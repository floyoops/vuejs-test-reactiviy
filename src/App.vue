<template>
  <div id="app">
    <div>
      <myForm v-on:submitForm="createBlock"></myForm>
    </div>
    <div class="parents-cols">
      <ParentA :initialBlocks="blocks"></ParentA>
    </div>
  </div>
</template>

<script>
import myForm from './components/myForm'
import ParentA from './components/ParentA'
import CreateBlockCommand from "./Domain/Command/CreateBlockCommand";

export default {
  name: 'app',
  data() {
    return {blocks: this.blockStore.data}
  },
  methods: {
    createBlock(title) {
      this.commandBus.$emit('CreateBlockCommand', new CreateBlockCommand(title))
    }
  },
  inject: ['commandBus', 'blockStore'],
  components: {
    myForm,
    ParentA
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.parents-cols{
  columns: 1;
}
.one-parent {
  height: 800px;
  padding: 10px;
}
</style>
