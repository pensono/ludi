<script lang="ts">
    import Input from "$lib/components/util/Input.svelte";

    export let name: string;
    export let value: number;
</script>

<div><label>{name}</label><Input kind="number" bind:value /></div>

<style lang="scss">
    div {
        color: var(--color-detail);
        margin: 0;
    }

    label {
        display: inline-block;
        width: var(--item-label-size)
    }
</style>