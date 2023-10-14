<script lang="ts">
    import type { LudiType } from "$lib/ludi/types";
    import Input from "$lib/components/util/Input.svelte"
	import NumberEditor from "./NumberEditor.svelte";
	import Choice from "../util/Choice.svelte";
	import ChoiceEditor from "./ChoiceEditor.svelte";
	import ListEditor from "./ListEditor.svelte";

    export let title: string;
    export let type: LudiType;
</script>

<div>
    <Input bind:value={title} />
    <Choice options={["Number", "Grid", "Enumeration"]} bind:value={type.name} />
</div>

{#if type.name === "Number"}
    <NumberEditor name="Min" bind:value={type.parameters.min} />
    <NumberEditor name="Max" bind:value={type.parameters.max} />
{:else if type.name === "Grid"}
    <NumberEditor name="Width" bind:value={type.parameters.width} />
    <NumberEditor name="Height" bind:value={type.parameters.height} />
{:else if type.name == "Enumeration"}
    <ListEditor bind:values={type.parameters.values} />
{/if}

<style lang="scss">
</style>