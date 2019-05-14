<template>
    <div id="ParentB" class="one-parent">
        <span>Parent B</span>
        <Child2></Child2>
    </div>
</template>

<script>
    import Child2 from './Child2'
    export default {
        name: 'ParentB',
        components: {
            Child2
        }
    }
</script>

<style>
    #ParentB {
        background-color: lightgreen;
    }
</style>
