<script>
	import { page } from '$app/stores';
	import SingleLayout from "$lib/components/layout/SingleLayout.svelte";
</script>

<!-- Error pages must be simple -->
<SingleLayout>
    <h1>{$page.status}: {$page.error?.message}</h1>
</SingleLayout>