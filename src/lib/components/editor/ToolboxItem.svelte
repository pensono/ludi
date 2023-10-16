<script lang="ts">
    export let title: string;
</script>

<div {...$$restProps} class:wrap={true} on:click on:mouseenter on:mouseleave>
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
        padding-top: .5rem;
        padding-bottom: .5rem;
        padding-left: var(--indent);
        padding-right: var(--indent);
    }

    div.detail {
        padding-left: 1rem;
    }
</style>