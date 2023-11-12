<script>
	import Logo from "$lib/components/Logo.svelte";

</script>

<div class="wrap">
    <h1><div class="logoWrap"><Logo color="var(--color-foreground)" /></div></h1>
    <h2>Any game, with anyone</h2>
</div>

<style lang="scss">
    * {
        // https://pigment.shapefactory.co/?a=0E7144&b=80A11D
        --color-background: #036134;
        --color-foreground: #80A11D;
        --color-foreground-light: #A3C23A;

        // --color-background: #52791E;
        // --color-foreground: #A4D759;
        
        // --color-background: #591B35;
        // --color-foreground: #EF194F;
        
        // --color-background: #521A60;
        // --color-foreground: #E0285F;
        
        // --color-background: #323D21;
        // --color-foreground: #D6ADA9;
    }

    h1 {
        margin: 0;
        margin-top: 10rem;
        margin-left: 5rem;
        margin-right: 5rem;
        padding: 0;
        
        color: var(--color-foreground);
        user-select: none;
        display: flex;
        justify-content: center;

        @media screen and (max-width: 1000px) {
            height: unset;
            margin-top: 4rem;
            margin-left: 2rem;
            margin-right: 2rem;
        }
    }

    .logoWrap {
        width: 1000px;
    }
    
    h2 {
        font-family: Geist;
        font-size: 5rem;
        font-weight: 500;
        letter-spacing: -.03em;
        color: var(--color-foreground-light);
        
        margin: 0;
        margin-top: 5rem;
        padding: 0;
        text-align: center;

        user-select: none;
        
        @media screen and (max-width: 1000px) {
            font-size: 8vw;
            margin-top: 2vw;
        }
    }

    .wrap {
        background-color: var(--color-background);
        margin: 0;

        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>