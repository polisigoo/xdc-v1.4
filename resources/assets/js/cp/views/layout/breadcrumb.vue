<template>
    <div class="d-flex">
        <p class="pr-2 pl-2 mygrey">Your Account</p>
        <span v-for="path in paths">
            <span class="mygrey mt-0 mt-md-1" style="font-size: 0.8rem; margin-top: 3px">&#x3e;</span>
            <a href="#" class="pr-2 pl-2 mygrey text-capitalize">{{path}}</a>
        </span>

    </div>
</template>

<script>
    export default {
        name: "breadcrumb",
        props: ['paths'],

    }
</script>

<style scoped>

</style>