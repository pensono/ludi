<script lang="ts">
    export let title: string;
</script>

<div {...$$restProps} class:wrap={true} on:click>
    <p>{title}</p>
    {#if $$slots.default}
        <div class="detail">
            <slot />
        </div>
    {/if}
</div>

<style lang="scss">
    p {
        margin: 0;
        user-select: none;
    }

    div.wrap {
        margin: 0;
        padding: .5rem;
    }

    div.detail {
        padding-left: 1rem;
    }
</style>