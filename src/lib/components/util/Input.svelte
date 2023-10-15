<script lang="ts">
    export let value: any;
    export let kind: 'string' | 'number';

    function onInputNumber(event: Event) {
        const target = event.currentTarget as HTMLInputElement;
        const parsed = parseInt(target.value);

        if (parsed) {
            value = parsed;
        }
    }
</script>

{#if kind === 'string'}
    <input bind:value type='text' />
{:else if kind === 'number'}
    <input on:input={onInputNumber} value={value} type='number' />
{/if}

<style>
    input {
        width: 16ch;
        border: 1px solid transparent;
        border-radius: 4px;
        font-family: var(--mono-font);
    }

    input:hover {
        border: 1px solid var(--border-color);
        transition: border 100ms;
    }

    input:focus {
        outline: none;
        border: 1px solid var(--border-color);
    }

    input[type="number"] {
        appearance: textfield;
        text-align: right;
    }
</style>