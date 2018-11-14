<template>
    <div class="d-flex">
        <sidebar></sidebar>
        <div class="main-content pt-md-4 pt-2 ml-2 ml-md-4 px-2 px-md-1" style="width: 80%">
            <breadcrumb v-bind:paths="paths"></breadcrumb>
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
    import sidebar from './layout/sidebar';
    import breadcrumb from './layout/breadcrumb';
    export default {
        name: "app",
        components:{
            sidebar,
            breadcrumb,
        },
        data(){
            return{
                paths: this.removeEmpty(this.$route.path.substring(1).split("/"))
            }

        },
        beforeCreate(){
            axios.get('/getAuth').then(res => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
            }).catch(err => {

            });
        },
        watch:{
            $route(){
                this.paths = this.removeEmpty(this.$route.path.substring(1).split("/"));
            }
        },
        created(){
            console.log(this.paths);
        },
        methods: {
            removeEmpty(arr)
            {
                let newArray = [];
                arr.forEach(a => {
                    if (a.length > 0){
                        newArray.push(a);
                    }
                });
                return newArray;
            },
        },
    }
</script>