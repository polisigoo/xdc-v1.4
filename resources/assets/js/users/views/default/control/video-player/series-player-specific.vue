<template>
    <div>
        <div class="report-modal" v-if="show_report">
            <div class="col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3" id="modal">
                <div class="header">
          <span id="close" @click="CLOSE_REPORT()">
   <svg version="1.1" class="sm-exit-svg" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
                        <circle style="fill:#E21B1B;" cx="255.999" cy="255.999" r="255.999"/>
                        <g>
                                <rect x="244.002" y="120.008" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0397 256.0022)" style="fill:#FFFFFF;" width="24" height="271.988"/>
                                <rect x="120.008" y="244.007" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0428 256.0035)" style="fill:#FFFFFF;" width="271.988" height="24"/>
                        </g>
                </svg>
          </span>
                </div>
                <div class="body">
                    <h1>{{$t('report.what_happening')}}
                        <b style="color:dodgerblue">?</b>
                    </h1>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input class="custom-control-input" name="radio_group_1" v-validate="'required|in:1,2,3,4'"
                                   type="radio" value="1" v-model="report_problem_type">
                            <span class="custom-control-indicator"></span>
                            <h4>{{$t('report.labeling_problem')}}</h4>
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input class="custom-control-input" name="radio_group_1" type="radio" value="2"
                                   v-model="report_problem_type">
                            <span class="custom-control-indicator"></span>
                            <h4>{{$t('report.video_problem')}}</h4>
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input class="custom-control-input" name="radio_group_1" type="radio" value="3"
                                   v-model="report_problem_type">
                            <span class="custom-control-indicator"></span>
                            <h4>{{$t('report.sound_problem')}}</h4>
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input class="custom-control-input" name="radio_group_1" type="radio" value="4"
                                   v-model="report_problem_type">
                            <span class="custom-control-indicator"></span>
                            <h4>{{$t('report.caption_problem')}}</h4>
                        </label>
                    </div>
                    <span class="help is-danger" v-show="errors.has('radio_group_1')">Please Choose The Problem</span>

                    <div class="textarea-details">
                        <h3>{{$t('report.more_details')}}</h3>
                        <textarea v-model="report_details" :placeholder="$t('report.more_details')" cols="40"
                                  rows="6"></textarea>
                    </div>
                    <div class="my-2">
                        <button v-if="! report_button" class="btn btn-warning" @click="SEND_REPORT">
                            {{$t('report.send')}}
                        </button>
                        <button class="btn btn-warning" v-if="report_button"><i id="btn-progress"></i> Loading</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- END REPORT -->

        <div class="col-12 row" style="padding:0; margin: 0; height: 100%;">
            <div class="col-12">
                <div id="flowplayer-player" class="is-closeable">
                    <div id="my-player" class="flowplayer custom-subtitles fp-custom-playlist">

                        <div id="flowplayer-next-video" class="col-12">
                        </div>

                        <div id="flowplayer-report-button">
                            <div class="icon-report"></div>
                        </div>

                        <div id="flowplayer-playlist" class="col-6 col-md-4 col-xl-3">

                        </div>

                        <div id="flowplayer-playlist-button">
                            <div class="playlist-icon"></div>
                        </div>

                        <div id="flowplayer-back-button">
                            <div class="icon-back"></div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

    const alertify = require("alertify.js");
    import {mapState} from "vuex";

    export default {

        name: "series-player-specific",
        data() {
            return {
                episode_title: "",
                series_title: "",
                url_subtitle: "",
                seasonHide: true,
                active: "",
                activeSeason: "",
                report_problem_type: null,
                report_details: null,
                report_button: false
            };
        },
        computed: mapState({
            data: state => state.player.data,
            season: state => state.player.season,
            show_report: state => state.player.show_report,
            next_episode: state => state.player.next_episode,
            next_season: state => state.player.next_season,
            next: state => state.player.next,
            next_is: state => state.player.next_is,
            next_episode_playlist: state => state.player.next_episode_playlist,
            season_playlist_active: state => state.player.season_playlist_active
        }),



        mounted() {

            // Run video
            this.$store.dispatch("LOAD_SERIES_PLAYER", {
                episode_id: this.$route.params.episode_number,
                type: "sp",
                series_id: this.$route.params.series_id
            });

            if (this.next === "episode") {
                this.$store.dispatch("LOAD_SERIES_PLAYER", {
                    episode_id: this.next_episode.id,
                    type: "sp",
                    series_id: this.$route.params.series_id
                });
            }
            if (this.next === "season") {
                this.$store.dispatch("LOAD_SERIES_PLAYER", {
                    episode_id: this.next_season.id,
                    type: "sp",
                    series_id: this.$route.params.series_id
                });
            }
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

        watch: {

            next(val) {
                if (val === "episode") {
                    this.$store.commit('FLOWPLAYER_DESTORY', 'series');
                    this.$store.dispatch("LOAD_SERIES_PLAYER", {
                        episode_id: this.next_episode.id,
                        type: "sp",
                        series_id: this.next_episode.series_id
                    });

                }
                if (val === "season") {

                    this.$store.commit('FLOWPLAYER_DESTORY', 'series');
                    this.$store.dispatch("LOAD_SERIES_PLAYER", {
                        episode_id: this.next_season.id,
                        type: "sp",
                        series_id: this.next_season.series_id
                    });

                }
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

            // onclick change

            next_is(val) {
                if (val === "episode") {
                    this.$store.commit('FLOWPLAYER_DESTORY', 'series');
                    this.$store.dispatch("LOAD_SERIES_PLAYER", {
                        episode_id: this.next_episode.id,
                        type: "sp",
                        series_id: this.next_episode.series_id
                    });
                } else if (val === "season") {
                    this.$store.commit('FLOWPLAYER_DESTORY', 'series');
                    this.$store.dispatch("LOAD_SERIES_PLAYER", {
                        episode_id: this.next_season.id,
                        type: "sp",
                        series_id: this.next_season.series_id
                    });
                }
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

            // Onclick  Playlist
            next_episode_playlist(val) {
                for (
                    var index = 0;
                    index < this.season[this.season_playlist_active].length;
                    index++
                ) {
                    if (this.season[this.season_playlist_active][index].id == val) {
                        this.$store.commit('FLOWPLAYER_DESTORY', 'series');
                        this.$store.dispatch("LOAD_SERIES_PLAYER", {
                            episode_id: this.season[this.season_playlist_active][index].id,
                            type: "sp",
                            series_id: this.season[this.season_playlist_active][index].series_id
                        });
                    }
                }

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
            }

        },
        methods: {
            CHANGE_SERIES(episode_id) {
                this.$store.dispatch("LOAD_SERIES_PLAYER", {
                    episode_id: episode_id,
                    type: "sp"
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

            SEND_REPORT() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.report_button = true;
                        axios
                            .post("/api/v1/create/report/series", {
                                type: this.report_problem_type,
                                details: this.report_details,
                                episode_id: this.data.id,
                                series_id: this.data.series_id
                            })
                            .then(
                                res => {
                                    if (res.data.status === "success") {
                                        this.report_button = false;
                                        this.$store.commit("CLOSE_REPORT");
                                        alertify.logPosition("top right");
                                        alertify.success("Successful Send, our team will check it soon");
                                    }
                                },
                                error => {
                                    //
                                }
                            );
                    }
                });
            },
            // When Colse video re-play video
            CLOSE_REPORT() {
                this.$store.commit('CLOSE_REPORT')
            },
        }
    };
</script>