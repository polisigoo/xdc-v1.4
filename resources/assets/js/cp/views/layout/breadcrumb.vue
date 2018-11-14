<template>
    <div class="d-flex">
        <p class="pr-2 pl-2 mygrey">Your Account</p>
        <span v-for="path in paths">
            <i class="fa fa-angle-right mygrey px-1"></i>
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