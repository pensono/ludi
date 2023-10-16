<script lang="ts">
    import Input from "$lib/components/util/Input.svelte";

    export let name: string;
    export let value: number;
</script>

<div><label>{name}</label><Input bind:value kind="number" class="input" /></div>

<style lang="scss">
    div {
        display: flex;

        margin: 0;
        margin-left: var(--indent);
    }

    :global(.input) {
        flex-grow: 1;
    }

    label {
        display: inline-block;
        width: calc(var(--item-label-size) - var(--indent));
        padding: calc(var(--input-padding) + 1px);
    }
</style>