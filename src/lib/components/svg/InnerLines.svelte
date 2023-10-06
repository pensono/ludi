<script lang="ts">
    export let width: number;
    export let height: number;
    export let color: string;
</script>

<svg viewBox="0 0 {width} {height}">
    {#each {length: width - 1} as _, i}
        <line x1="{i+1}" y1="0" x2="{i+1}" y2="{height}" style="stroke:{color};stroke-width:.1" />
    {/each}

    {#each {length: height - 1} as _, i}
        <line x1="0" y1="{i+1}" x2="{width}" y2="{i+1}" style="stroke:{color};stroke-width:.1" />
    {/each}
</svg>

<style lang="scss">
    svg {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>