<template>

    <div>

        <div id="player" v-html="video">

        </div>

    </div>

</template>

<script>
    export default {
        name: 'movie-player-embed',
        data() {
            return {
                movie_title: '',
                active: '',
                video: '',
            }
        },
        mounted() {

            axios.get('/api/v1/get/watch/movie/' + this.$route.params.id).then(response => {
                if (response.status === 200) {
                    this.video = '<iframe width="100%" height="100%" src="'+ response.data.data.video[0].video +'" frameborder="0" allowfullscreen></iframe>';
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
                document.querySelector('.fp-player>a').style.height ="50px";
                document.querySelector('.fp-player>a').style.width ="100px";
                document.querySelector('.fp-player>a').href ="/";
                // document.querySelector('.fp-player>a').style.top ="0";
                document.querySelector('.fp-player>a').style.backgroundPosition ="center";
                document.querySelector('.fp-player>a').style.backgroundSize ="100px 50px";
                document.querySelector('.fp-player>a').style.left ="10%";
                document.querySelector('.fp-player>a').style.bottom ="30%";

                var x = window.matchMedia("(max-width: 1440px)")
                mediaQuery(x, "20%", "5%") 
                x.addListener(mediaQuery)
                var z = window.matchMedia("(min-width: 700px)")
                mediaQuery(z, "25%", "8%") 
                z.addListener(mediaQuery)
                var y = window.matchMedia("(max-width: 500px)")
                mediaQuery(y, "37%", "5%") 
                y.addListener(mediaQuery)


                function mediaQuery(x, val, y) {
                    if (x.matches) { // If media query matches
                        document.querySelector('.fp-player>a').style.bottom =val;
                        document.querySelector('.fp-player>a').style.left =y;
                    } else {
                        document.querySelector('.fp-player>a').style.bottom ="20%";
                    }
                }
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