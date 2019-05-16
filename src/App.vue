<template>
  <div id="app">
    <div>
      <myForm v-on:submitForm="createBlock"></myForm>
    </div>
    <div class="parents-cols">
      <ParentA :blocks="blocks"></ParentA>
      <ParentB></ParentB>
      <ParentC></ParentC>
    </div>
  </div>
</template>

<script>
import myData from './Data/myData'
import myForm from './components/myForm'
import ParentA from './components/ParentA'
import ParentB from './components/ParentB'
import ParentC from './components/ParentC'
import CreateBlockCommand from "./Domain/Command/CreateBlockCommand";

export default {
  name: 'app',
  data: () => ({
    blocks: myData.blocks
  }),
  methods: {
    createBlock(title) {
      this.commandBus.$emit('CreateBlockCommand', new CreateBlockCommand(title))
    }
  },
  inject: ['commandBus'],
  components: {
    myForm,
    ParentA,
    ParentB,
    ParentC
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
  columns: 3;
}
.one-parent {
  min-height: 500px;
  padding: 10px;
}
.one-child {
  min-height: 10px;
  padding: 10px;
  margin: 10px;
}
</style>
