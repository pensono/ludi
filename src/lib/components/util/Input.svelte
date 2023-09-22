<input {...$$props} />

<style>
    input {
        width: 6ch;
        border: 1px solid transparent;
        border-radius: 4px;
        color: var(--detail-text);
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