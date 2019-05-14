<template>
    <div id="ParentA" class="one-parent">
        <div>Parent A</div>
        <Child1></Child1>
    </div>
</template>

<script>
    import Child1 from './Child1'
    export default {
        name: 'ParentA',
        components: {
            Child1
        }
    }
</script>

<style>
    #ParentA {
        background-color: dodgerblue;
    }
</style>
