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
    <input class={$$props.class} bind:value type='text' />
{:else if kind === 'number'}
    <input class={$$props.class} on:input={onInputNumber} value={value} type='number' />
{/if}

<style>
    input {
        padding: var(--input-padding);
        min-height: var(--input-height);
        max-height: var(--input-height);
        border: 1px solid transparent;
        border-radius: 4px;
        font-family: var(--mono-font);

        background-color: transparent;
    }

    input:hover {
        border: 1px solid var(--color-divider);
        transition: border 100ms;
    }

    input:focus {
        outline: none;
        border: 1px solid var(--color-divider);
    }

    input[type="number"] {
        appearance: textfield;
    }
</style>