<template>
    <header>
        <router-link to="/countries"><h1>Countries</h1></router-link>
        <router-link to="/about"><h1>About</h1></router-link>
    </header>
</template>

<script>
export default {
    components: {
        name: `Header`,
        
    },
};
</script>

<style scoped>
    header{
        width: calc(100vw - 4rem);
        height: 4rem;
        border-bottom: 2px gray solid;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    h1{
        font-weight: bold;
    }
    a{
        text-decoration: none;
        color: gray;
    }
    a:hover{
        text-decoration: underline;
        color: lightgray;
    }
</style>