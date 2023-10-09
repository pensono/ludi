<script lang="ts">
	import { page } from "$app/stores";
    import toast from 'svelte-french-toast';

    export let text: string;

    function share() {
        if (navigator.share) {
            navigator.share({
                url: $page.url.toString()
            })
        } else {
            navigator.clipboard.writeText($page.url.toString());
            toast.success("Link copied");
        }
    }
</script>

<button on:click={share} on:keypress={share}>{text}</button>

<style lang="scss">
    button {
        align-self: center;
        margin: .5rem;
    }
</style>