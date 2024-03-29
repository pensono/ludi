<script lang="ts">
    import { twMerge } from 'tailwind-merge';

    export let value: any;
    export let kind: 'string' | 'number';

    function onInputNumber(event: Event) {
        const target = event.currentTarget as HTMLInputElement;
        const parsed = parseInt(target.value);

        if (parsed) {
            value = parsed;
        }
    }

    let className = '';
    export { className as class };
</script>

{#if kind === 'string'}
    <input class={twMerge("box-content p-1 h-4 font-mono border-transparent hover:border-mix-800 focus:border-mix-800 border rounded outline-none", className)} bind:value type='text' />
{:else if kind === 'number'}
    <input class={twMerge("box-content p-1 h-4 border-transparent hover:border-mix-800 focus:border-mix-800 border rounded outline-none", className)} on:input={onInputNumber} value={value} type='number' />
{/if}

<style>
    input[type="number"] {
        appearance: textfield;
    }
</style>