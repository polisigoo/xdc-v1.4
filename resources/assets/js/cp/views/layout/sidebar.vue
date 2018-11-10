<template>
    <nav class="d-flex flex-column mynav pt-4 ">
        <h6 class=""><router-link :to="{name: 'dashboard'}" class="d-block nav-link   mygrey px-3">Dashboard</router-link></h6>
        <h6 class=""><router-link :to="{}" class="d-block nav-link  mygrey px-3">Account Activation</router-link></h6>
        <h6 class=""><router-link :to="{name: 'contentEdit'}" class="d-block nav-link  mygrey px-3">Content</router-link></h6 >
        <h6 class=""><router-link :to="{}" class="d-block nav-link  mygrey px-3">Uploads</router-link></h6>
        <h6 class=""><router-link :to="{}" class="d-block nav-link  mygrey px-3">Report</router-link></h6>
        <h6 class=""><router-link :to="{name: 'collection'}" class="d-block nav-link  mygrey px-3">Statement</router-link></h6>
        <h6 class=""><router-link :to="{}" class="d-block nav-link  mygrey px-3">FAQs</router-link></h6>
        <h6 class=""><router-link :to="{}" class="d-block nav-link  mygrey px-3">Legals</router-link></h6>
        <h6 class=""><router-link :to="{}" class="d-block nav-link  mygrey px-3">Support Tickets</router-link></h6>
        <h6 class=""><router-link :to="{name : 'settings'}" class="d-block nav-link  mygrey px-3">Settings</router-link></h6>
    </nav>
</template>

<script>
    export default{
        name: "sidebar",
        data(){
            return{

            }
        },

    }
</script>

<style scoped>

</style>