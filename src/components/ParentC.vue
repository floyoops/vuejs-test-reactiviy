<template>
    <div id="ParentC" class="one-parent">
        <span>Parent C</span>
        <Child3></Child3>
    </div>
</template>

<script>
    import Child3 from './Child3'
    export default {
        name: 'ParentC',
        components: {
            Child3
        }
    }
</script>

<style>
    #ParentC {
        background-color: lightcoral;
    }
</style>
