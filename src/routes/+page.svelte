<script>
	import Logo from "$lib/components/Logo.svelte";
	import Meta from "$lib/components/util/Meta.svelte";
</script>

<Meta backgroundColor="var(--color-brand-background)" foregroundColor="var(--color-brand-foreground)" title="Play" />

<div class="text-center">
    <h1 class="flex justify-center p-6 pt-16 mx-auto lg:pt-40 lg:pb-16">
        <div class="w-[1000px]"><Logo class="fill-foreground stroke-foreground" capWidth animate/></div>
    </h1>
    <!-- <h2>Any game, with anyone</h2> -->
    <h2 class="p-6 text-5xl sm:text-6xl lg:text-[5rem] font-medium -tracking-[0.03em] select-none">Board games for&nbsp;all</h2>
    <a class="inline-block box-content w-[400px] max-w-[80vw] mt-24 lg:mt-32 p-3 lg:p-6 rounded-full border-2 border-foreground text-[2rem] lg:text-[3rem] leading-none hover:bg-foreground hover:text-background duration-150 select-none" href="/play">Play a game</a>
</div>
