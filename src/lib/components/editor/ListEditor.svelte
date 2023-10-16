<script lang="ts">
    import Input from "$lib/components/util/Input.svelte";

    export let values: string[];

    function addItem() {
        values = [...values, ''];
    }

    function remove(index: number) {
        values.splice(index, 1);
        values = values;
    }
</script>

{#each values as value, i}
    <div>
        <Input bind:value kind="string" class="input"/>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span on:click={() => remove(i)} class="material-symbols-outlined">close</span>
    </div>
{/each}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="detail" on:click={addItem}>+ Add</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-left: var(--indent);
    }

    :global(.input) {
        flex-grow: 1;
    }

    span {
        font-size: 16px;
        vertical-align: bottom;
        padding: var(--input-padding);
        color: var(--detail-text-color);
    }

    .detail {
        font-size: var(--detail-text-size);
        color: var(--detail-text-color);
        cursor: pointer;
    }
</style>