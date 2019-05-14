<template>
  <div id="app">
    <div class="parents-cols">
      <ParentA></ParentA>
      <ParentB></ParentB>
      <ParentC></ParentC>
    </div>
  </div>
</template>

<script>
import ParentA from './components/ParentA'
import ParentB from './components/ParentB'
import ParentC from './components/ParentC'

export default {
  name: 'app',
  components: {
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
  min-height: 400px;
  padding: 10px;
}
.one-child {
  min-height: 40px;
  padding: 10px;
  margin: 10px;
}
</style>
