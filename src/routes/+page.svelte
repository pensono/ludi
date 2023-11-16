<script>
	import Logo from "$lib/components/Logo.svelte";
	import Meta from "$lib/components/util/Meta.svelte";
</script>

<Meta backgroundColor="var(--color-background)" title="Ludi" />

<div class="wrap">
    <h1><div class="logoWrap"><Logo color="var(--color-foreground)" capWidth animate/></div></h1>
    <!-- <h2>Any game, with anyone</h2> -->
    <h2>Board games for&nbsp;all</h2>
    <a href="/play">Play a game</a>
</div>

<style lang="scss">
    h1 {
        margin-top: 10rem;
        margin-bottom: 5rem;
        margin-left: 5rem;
        margin-right: 5rem;
        padding: 0;
        
        color: var(--color-foreground);
        user-select: none;
        display: flex;
        justify-content: center;

        @media screen and (max-width: 1000px) {
            margin-top: 4rem;
            margin-bottom: 2rem;
            margin-left: 2rem;
            margin-right: 2rem;
        }
    }

    .logoWrap {
        width: 1000px;
    }
    
    h2 {
        font-size: 5rem;
        font-weight: 500;
        letter-spacing: -.03em;
        color: var(--color-foreground);
        
        margin: 0;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-top: 2rem;
        padding: 0;

        user-select: none;
        
        @media screen and (min-width: 480px) and (max-width: 1000px) {
            font-size: 4rem;
            margin-top: 2vw;
        }

        @media screen and (max-width: 480px) {
            font-size: 2rem;
            margin-top: 2vw;
        }
    }

    a {
        display: inline-block;
        margin-top: 10rem;
        padding: .5em;
        
        border-radius: 2em;
        border: 2px solid var(--color-foreground);
        color: var(--color-foreground);
        font-size: 3rem;

        width: 400px;
        text-align: center;

        text-decoration: none;
        user-select: none;
        
        @media screen and (max-width: 1000px) {
            margin-top: 5rem;
            font-size: 2rem;
            max-width: 80vw;
        }
    }

    .wrap {
        background-color: var(--color-background);
        margin: 0;

        text-align: center;

        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>