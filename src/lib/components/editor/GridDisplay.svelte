<script lang="ts">
    export let value: any[][];
</script>

<div class="wrapper">
    {#each value as column, x}
        {#each column as cell, y}
            <p style="grid-column: {x+1}; grid-row: {column.length-y};">{cell}</p>
        {/each}
    {/each}
</div>

<style lang="scss">
    .wrapper {
        display: grid
    }
</style>