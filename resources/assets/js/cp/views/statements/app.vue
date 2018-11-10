<template>
    <div>
        <div class="sub-main1 d-flex my-4">
            <router-link :to="{name: 'collection'}" class="col-4 mx-auto btn btn-default b">Collections</router-link>
            <router-link :to="{name: 'transaction'}" class="col-4 mx-auto btn btn-light b">Transactions</router-link>
        </div>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>

</style>