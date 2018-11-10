<template>
    <div class="d-flex">
        <sidebar></sidebar>
        <div class="main-content pt-md-4 pt-2 ml-2 ml-md-4 px-2 px-md-1" style="width: 80%">
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
    import sidebar from './layout/sidebar';
    export default {
        name: "app",
        components:{
            sidebar,
        },
        beforeCreate(){
            axios.get('/getAuth').then(res => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
            });
        },
        created(){

        }
    }
</script>