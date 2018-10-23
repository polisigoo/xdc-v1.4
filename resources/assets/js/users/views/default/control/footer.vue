<template>
    <footer id="footer" class="ml-1">
        <div class="d-flex" style="margin-left: 10px; margin-right: 10px;">
            <div class="col-5 col-md-5 flex-item p-lg-0 p-md-3 ">
                <a style="" class="d-block col-11 col-md-3 p-0 p-lg-0 p-md-3 " href="/">
                    <img src="/images/logo.png" id="logo-foot" alt="logo" width="70%">
                </a>
            </div>
            <div class="col-2 col-md-2"></div>
            <div class="col-5 col-md-5 ml-lg-auto flex-item pl-0 pr-0 justify-content-end">
                <ul class="social-nav" v-if="data !== null">
                    <li class="icons">
                        <a :href="data.social_facebook" target="_blank">
                            <i class="fa fa-facebook fa-md fa-lg"></i>

                            <span class="hidden">{{$t('app_name')}} on Facebook</span>
                        </a>
                    </li>
                    <li class="icons">
                        <a :href="data.social_instagram" target="_blank">
                            <i class="fa fa-instagram fa-md fa-lg"></i>
                            <span class="hidden">{{$t('app_name')}} on Instagram</span>
                        </a>
                    </li>
                    <li class="icons">
                        <a :href="data.social_twitter" target="_blank">
                            <i class="fa fa-twitter fa-md fa-lg"></i>
                            <span class="hidden">{{$t('app_name')}} on Twitter</span>
                        </a>
                    </li>
                    <li class="icons">
                        <a :href="data.social_twitter" target="_blank">
                            <i class="fa fa-youtube fa-md fa-lg"></i>
                            <span class="hidden">{{$t('app_name')}} on Twitter</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="d-flex other-footer" >
            <div class="row">
                <div class="col-12 mt-4 mt-lg-4 mt-sm-2 col-lg-6">
                    <h5 class="mb-3">SUPPORT</h5>
                    <a href="#" class="d-block">Contact Support</a>
                    <a href="#" class="d-block">FAQ</a>
                    <a href="" class="d-block">Downloads</a>
                </div>
                <div class="col-12 mt-4 mt-lg-4 mt-lg-4 mt-sm-2 col-lg-6">
                    <h5 class="mb-3">PARTNERS</h5>
                    <a href="#" class="d-block">Content Submission</a>
                    <a href="#" class="d-block">Advertisement</a>
                    <a href="" class="d-block">Partnerships</a>
                </div>
            </div>
            <div class="row" style="margin-left: auto;">
               <div class="col-12 mt-4 mt-lg-4 mt-sm-2 col-lg-6">
                    <h5 class="mb-3">LEGAL</h5>
                    <router-link :to="{name: 'terms'}" class="d-block">{{$t('footer.terms')}}</router-link>
                    <router-link :to="{name: 'privacy'}" class="d-block">Privacy Policy</router-link>
                    <a href="" class="d-block">Govt Regulatory</a>
                </div>
                <div class="col-12 mt-4 mt-lg-4 mt-lg-0 mt-sm-2 col-lg-6">
                    <h5 class="mb-3">COMPANY</h5>
                    <router-link :to="{name: 'about-us'}" class="d-block">{{$t('footer.aboutus')}}</router-link>
                    <router-link :to="{name: 'contact-us'}" class="d-block">{{$t('footer.contactus')}}</router-link>
                    <a href="" class="d-block">Careers</a>
                </div>  
            </div>  
        </div>
        <p class="pl-lg-3 text-center text-lg-left mt-4 odd-color-brighter mb-2">© 2018 R2H Live Mediatech Pvt. Ltd.</p>
        <p class="pl-lg-3 d-none d-lg-block odd-color">{{$t('app_name')}} is the registered trademark of R2H Media Tech Pvt Ltd.</p>
    </footer>
    
</template>
<style>
   #footer{
        display: flex;
        flex-direction: column;
   } 
   #footer:first-child{
        margin-bottom: 2rem;
   }
   .other-footer a{
        color: #bfbfbf;
        
   }
   @media screen and (max-width: 600px) {
      .other-footer a {
        font-size: 0.8rem;
      }
      .social-nav li{
            margin-left: 0.5em!important;
            font-size: 1em!important;
       }
       .social-nav li:first-of-type{
            margin-left: 0px;
       }
       #logo-foot{
        width: 90%
       }
    }
   .other-footer{
    color: #6f6f6f
   }
   .odd-color{
        color: #6f6f6f;
   }
   .odd-color-brighter{
        color: #bfbfbf;
   }
   .other-footer a:hover{
        color: #dfdfdf;
   }
   .flex-container{
        display: flex;
        margin-bottom: 2.5rem;
        color: #2f2f2f;
   }
   .flex-container a {
        display: block;
        color: #8f8f8f;
   }
   .icons{
    font-size: 20px;
   }
   .icons i{
        display: flex;
        align-items: center;
        margin-top: 30%;
   }
   .social-nav{
        display: flex;
        height: 100px;
        align-items: center;
        margin-bottom: 0px !important
   }
   .social-nav li{
        margin-left: 1em;
        font-size: 1.2em;
   }
   .social-nav li:first-of-type{
        margin-left: 0px;
   }
   .social-nav li a{
        color: #ccc !important;
        font-size: 1.2em;
   }
   .social-nav li:hover a{
        border-bottom: none;
        font-size:1.2em;
        color: #ffffff !important;
   }
   .flex-item{
    border-bottom: solid 1px  #8f8f8f;
    display: flex;
    height: 70px;
    align-items: center;
    text-align: left;
    justify-content: flex-start;
   }
   .row{
    margin-right: 0px;
    margin-left: 0px;
    width: 100%;
    /*justify-content: center;*/
   }
</style>

<script>
    import {
        mapState
    } from "vuex";

    export default {

        computed: mapState({
            data: state => state.home.footer,
        }),

        created() {
            if (this.data === null) {
                this.$store.dispatch("GET_HOME_FOOTER_DETAILS");
            }
        },


    };
</script>