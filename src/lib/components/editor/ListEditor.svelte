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
    <div class="flex flex-row ml-[--indent] group">
        <Input bind:value kind="string" class="grow-1 min-w-0"/>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span on:click={() => remove(i)} class="material-symbols-outlined pl-1 icon-16 text-transparent group-hover:text-mix-400 self-center cursor-pointer ">close</span> 
    </div>
{/each}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="font-small text-mix-400 cursor-pointer" on:click={addItem}>+ Add</div>
