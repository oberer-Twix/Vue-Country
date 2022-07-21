<template>
    <div id="Content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    components: {
        name: `Content`,
    },
};
</script>

<style scoped>
    #Content{
        min-height: calc(100vh - 11rem);
    }
</style>