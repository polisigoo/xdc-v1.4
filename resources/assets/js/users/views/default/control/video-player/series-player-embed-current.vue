<template>

    <div>

        <div id="player" v-html="video">

        </div>

    </div>

</template>

<script>
    export default {
        name: 'series-player-embed-current',
        data() {
            return {
                movie_title: '',
                active: '',
                video: '',
            }
        },
        mounted() {
            axios.post('/api/v1/get/watch/series/', {
                type: "cur",
                series_id: this.$route.params.series_id
            }).then(response => {
                if (response.status === 200) {
                    this.video = '<iframe width="100%" height="100%" src="'+ response.data.data.episode[0].video +'" frameborder="0" allowfullscreen></iframe>';
                }
            }, error => {
                // Show Sweetalert if there is problem
                swal({
                    icon: 'error',
                    title: 'There was a problem playing the video, we will fix it soon',
                    dangerMode: true,
                    button: 'Back',
                }).then(() => {
                    window.history.back();
                });
            });
            var myInt = setInterval(function(){
            if(document.querySelector('.fp-engine') != null ){
                    if(!document.querySelector('.fp-engine').paused ){
                        CLEAR()
                    }else{
                        CLEAR()
                    }  
                }    
            }, 10);
            function CLEAR(){
                document.querySelector('.fp-player>a').style.backgroundImage = "url('/images/logo_watermark.png')";
                document.querySelector('.fp-player>a').style.height ="100px";
                document.querySelector('.fp-player>a').style.width ="200px";
                document.querySelector('.fp-player>a').href ="/";
                document.querySelector('.fp-player>a').style.left ="5%";
            }
        },

    }
</script>

<style scoped>

    #player {
        position: fixed;
        width: 100%;
        left: 0;
    }

</style>