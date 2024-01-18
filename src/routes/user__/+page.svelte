<script lang="ts">
	import SingleLayout from "$lib/components/layout/SingleLayout.svelte";
	import Meta from "$lib/components/util/Meta.svelte";

    export let data;
</script>

<Meta backgroundColor="var(--brand-color-background)" foregroundColor="var(--brand-color-foreground)" title="{data.user}'s games" />

<SingleLayout>
    <h1>{data.user}'s games</h1>
</SingleLayout>

<style lang="scss">
    @use '$lib/components/layout/SingleLayout.scss';

    h1 {
        text-align: center;
    }

    h2 {
        display: block;
        margin: 0;
        margin-top: 1rem;
    }

    h2:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    a {
        padding: 0.5rem;
    }

    a:hover {
        text-decoration: underline;
    }
</style>