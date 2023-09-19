<nav>
    <h1>Ludi</h1>
</nav>

<slot />

<style lang="scss">
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    h1 {
        margin: .5rem;
    }
    
    nav {
        display: flex;
        justify-content: space-between;
        padding: .2rem;
        border-bottom: 1px solid #ccc;
    }
</style>