<template>
  <div id="app">
    <div>
      <myForm v-on:new:title="addNewTitle"></myForm>
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

export default {
  name: 'app',
  data: () => ({
    blocks: myData.blocks
  }),
  components: {
    myForm,
    ParentA,
    ParentB,
    ParentC
  },
  methods: {
    addNewTitle(newTitle) {
      let lastBlock = this.blocks[this.blocks.length - 1];
      let newId = lastBlock.id + 1;
      let newBlock = Object.create({id: newId, title : newTitle});
      this.blocks.push(newBlock);
    }
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
  min-height: 400px;
  padding: 10px;
}
.one-child {
  min-height: 10px;
  padding: 10px;
  margin: 10px;
}
</style>
