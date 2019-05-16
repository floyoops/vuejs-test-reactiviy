<template>
    <div>
    <button>X</button>
    <div class="childLine">{{ ChildLine.subTitle }}</div>
    </div>
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
        background-color: antiquewhite;
        text-align: left;
        padding: 2px;
        color: #2c3e50;
        margin-top: 6px
    }
</style>
