<script lang="ts">
    export let title: string;
    export let backgroundColor: string;
</script>


<svelte:head>
    <title>{title}</title>
    {@html `<style>:root {background-color: ${backgroundColor};}</style>`}

    <!-- For the title bar on iOS Safari. If the theme-color is also present in site.webmanifest, then it will not work. -->
    <meta name="theme-color" content="${backgroundColor}"/>
</svelte:head>