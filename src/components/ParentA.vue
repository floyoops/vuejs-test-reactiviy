<template>
    <div id="ParentA" class="one-parent">
        <div>Parent A</div>
        <Child1 v-for="block in blocks" :block="block"></Child1>
    </div>
</template>

<script>
    import Child1 from './Child1'
    export default {
        name: 'ParentA',
        components: {
            Child1
        },
        props: {
            blocks: {
                type: Array
            }
        }
    }
</script>

<style>
    #ParentA {
        background-color: dodgerblue;
    }
</style>
