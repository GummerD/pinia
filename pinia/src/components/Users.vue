<template>
    <h1>ID: {{ user.id }}</h1>
    <p>email: {{ user.email }}</p>
    <p>first name: {{ user.first_name }}</p>
</template>

<script setup>

    const props = defineProps({
        user: {
            type: Object,
            required: true,
            default: () => { } 
        }
    })

</script>

<style lang="css" scoped>

</style>