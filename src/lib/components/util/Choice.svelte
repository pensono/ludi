<script lang="ts">
    export let options: string[];
    export let value: string;
</script>

<select bind:value={value}>
    {#each options as option}
        <option value={option}>{option}</option>
    {/each}
</select>

<style>
    select {
        width: 20ch;
        border: 1px solid transparent;
        border-radius: 4px;
        color: var(--detail-text);
    }

    select:hover {
        border: 1px solid var(--border-color);
        transition: border 100ms;
    }

    select:focus {
        outline: none;
        border: 1px solid var(--border-color);
    }
</style>