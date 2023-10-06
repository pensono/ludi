<script lang="ts">
    export let width: number;
    export let height: number;
    export let color: string;
</script>

<svg viewBox="0 0 {width} {height}">
    {#each {length: width} as _, i}
        <line x1="{i}.5" y1=".5" x2="{i}.5" y2="{height-.5}" style="stroke:{color};stroke-width:.02" />
    {/each}

    {#each {length: height} as _, i}
        <line x1=".5" y1="{i}.5" x2="{width-.5}" y2="{i}.5" style="stroke:{color};stroke-width:.02" />
    {/each}
</svg>

<style lang="scss">
    svg {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>