<div class="wrapper">
    <nav>
        <h1><a href="/">Ludi</a></h1>
        <slot name="nav"></slot>
    </nav>
    
    <slot></slot>
</div>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;

        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    h1 {
        margin: .5rem;
    }
    
    h1 a {
        text-decoration: none;
        color: #000;
    }
    
    nav {
        display: flex;
        justify-content: space-between;
        padding: .2rem;
        border-bottom: 1px solid #ccc;
    }
</style>