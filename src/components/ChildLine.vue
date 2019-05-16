<template>
    <div class="childLine">{{ ChildLine.subTitle }}</div>
</template>

<script>
    export default {
      name: 'ChildLine',
      props: {
        ChildLine: {
          type: Object
        }
      }
    }
</script>

<style>
    .childLine {
        text-align: left;
        padding: 2px;
        color: #2c3e50;
    }
</style>