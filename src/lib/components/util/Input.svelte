<script lang="ts">
    export let value: any;
</script>

<input bind:value type='text' />

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