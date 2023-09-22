<script lang="ts">
    export let title: string;
</script>

<div class="wrap">
    <p>{title}</p>
    {#if $$slots}
        <div class="detail">
            <slot />
        </div>
    {/if}
</div>

<style lang="scss">
    p {
        margin-bottom: 0;
    }

    div.wrap {
        margin: .5rem;
    }

    div.detail {
        margin-left: 1rem;
    }
</style>