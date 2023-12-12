<script lang="ts">
    export let options: string[];
    export let value: string;
</script>

<select class={$$props.class} bind:value={value}>
    {#each options as option}
        <option value={option}>{option}</option>
    {/each}
</select>

<style>
    select {
        padding: var(--input-padding);
        height: calc(var(--input-height) + var(--input-padding) * 2 + 2px);
        border: 1px solid transparent;
        border-radius: 4px;
        background: none;
        color: var(--color-detail);
        appearance: none;
        line-height: normal;
    }

    select:hover {
        border: 1px solid var(--color-divider);
        transition: border 100ms;
        appearance:auto;
    }

    select:focus {
        outline: none;
        border: 1px solid var(--color-divider);
    }
</style>