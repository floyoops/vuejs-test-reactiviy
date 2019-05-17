<template>
    <div class="widget">
        <span>{{ widget.id }}</span>
        <span>{{ widget.title }}</span>
    </div>
</template>

<script>
    export default {
        props: {
          initialWidget: {type: Object}
        },
        data() {
          return {
            widget: this.initialWidget
          }
        }
    }
</script>

<style>
    .widget {
        background-color: burlywood;
        padding: 4px;
        margin: 4px;
        margin-top: 8px;
    }
</style>