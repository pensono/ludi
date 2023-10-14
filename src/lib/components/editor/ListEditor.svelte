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
        <Input bind:value kind="string" />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span on:click={() => remove(i)} class="material-symbols-outlined">delete</span>
    </div>
{/each}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={addItem}>+ Add</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>