<template>
    <div class="register">
        <div class="background-image"></div>
        <div v-if="show">
            <div class="float-right">
                <h2 style="color:#F44336; cursor:pointer; position:fixed; top:0; right:10px; z-index:2;"
                    @click="$auth.destroyToken()">
                    <strong>SIGNOUT</strong>
                </h2>
            </div>


            <div class="col-12 payment">
                <div class="col-12 col-md-8 col-lg-8 offset-md-2 p-4 payment-form">
                    <div class="col-8 offset-2">
                        <div class="steps hidden-xs-down">
                            <div class="step-1">
                                <div class="circle-1 active-circle ">
                                    <span>1</span>
                                </div>
                                <strong>Choose Plan</strong>

                                <div class="line-1 active-line">
                                    <svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <line x1="40" x2="180" y1="100" y2="100" stroke="url(#grecya)" stroke-width="3"
                                              stroke-linecap="round"></line>
                                    </svg>
                                </div>

                            </div>
                            <div class="step-2">
                                <div class="circle-2 active-circle">
                                    <span>2</span>
                                </div>
                                <strong>Signup </strong>
                                <div class="line-2 active-line">
                                    <svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <line x1="40" x2="180" y1="100" y2="100" stroke="url(#grecya)" stroke-width="3"
                                              stroke-linecap="round"></line>
                                    </svg>
                                </div>
                            </div>
                            <div class="step-3">
                                <div class="circle-3 active-circle">
                                    <span>3</span>
                                </div>
                                <strong>Payment</strong>
                            </div>
                        </div>
                    </div>
                    <div class="title mt-sm-5">
                        <h3>Set up your payment</h3>
                    </div>

                    <div class="mb-5">
                        <button class="btn btn-sm btn-secondary" @click="show_plan = !show_plan">Change Plan</button>
                        <p class="text-danger mt-2">{{plan_message}}</p>
                    </div>

                    <transition name="fade">
                        <div class="plan-form payment-plan-form " v-if="show_plan">
                            <h3>Change plan</h3>
                            <div class="col-lg-12 text-center">
                                <div class="row m-2">
                                    <div class="col-12 col-sm-6 col mt-3 text-center" v-for="(item, index) in planList"
                                         :key="index" @click="plan = item.plan_id">
                                        <div class="card-plan" :class="{active_plan: plan === item.plan_id}">
                                            <h3>{{item.plan_name}}</h3>
                                            <h1>₹{{item.plan_amount}}
                                                <small>/mo</small>
                                            </h1>
                                            <i v-if="item.plan_trial !== null">{{item.plan_trial}} days free</i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr>
                        </div>
                    </transition>


                    <div class=" col-lg-10 offset-lg-1 ">

                        <div id="dropin-wrapper">

                            <button v-if="!btn_disabled" class="btn btn-warning mt-4 pay-with-stripe" style="width:70%!important; margin-left:15%; margin-bottom:3%;" id="rzp-button1">Add a Payment Method</button>
                            <button v-if="btn_loading_payment" class="btn btn-warning mt-4 pay-with-stripe" style="width:70%!important; margin-left:15%; margin-bottom:3%;" >Loading Please Wait...</button>
                            
                            <button v-if="btn_select_plan" class="btn btn-warning mt-4 pay-with-stripe" style="width:70%!important; margin-left:15%; margin-bottom:3%;" @click="show_plan = !show_plan" >Please select a plan</button>
                            <div id="checkout-message"></div>
                            <div id="dropin-container"></div>
                        </div>

                        <small>No commitments, Cancel online at anytime</small>
                        <br>
                        <small class="text-danger">{{error}}</small>
                        <br>
                        <div class="col-12 col-xl-6 offset-xl-3 mt-5">

                            <button v-if="!button_loading && !button_disabled"
                                    class="btn btn-warning mt-4 pay-with-stripe"  onclick="document.querySelector('#rzp-button1').click()" ref="submit">START MEMBERSHIP
                            </button>
                            <button v-if="button_loading" class="btn btn-warning" disabled>
                                <i id="btn-progress"></i> Loading
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div v-if="finish">


            <div class="col-12 payment">
                <div class="col-12 col-md-8 col-lg-8 offset-md-2 p-4 payment-form">
                    <h3>Welcome To {{$t('app_name')}}</h3>
                    <h5>Your {{$t('app_name')}} membership, which begins with a free trial</h5>
                    <p>Cancel anytime before {{trail_end}} and will not be charged, to cancel go to your account setting
                        and Cancel Membership.</p>
                    <br>
                    <h4>Your account details</h4>
                    <ul>
                        <li>Name: {{name}}</li>
                        <li>Email: {{email}}</li>
                        <li>Payment Information: ***************</li>
                    </ul>
                    <div class="col-12 col-xl-6 offset-xl-3 mt-5">
                        <button class="btn btn-warning" @click="GO_HOME">Finish</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
    import {
        mapState
    } from "vuex";

    // import dropIn from 'braintree-web-drop-in'

    export default {
        data() {
            return {
                coupon: "",
                show: true,
                finish: false,
                show_plan: false,
                button_disabled: false,
                plan_message: "",
                error: null,
                complete: false,
                number: false,
                expiry: false,
                cvc: false,
                btn_disabled: true,
                user: null,

                // info
                email: "",
                name: "",
                trail_end: "",
                plan: null,
                button_loading: false,
                subscription: null,
                btn_loading_payment: false,
                btn_select_plan:false
            };
        },

        computed: mapState({
            planList: state => state.home.plan
        }),

        watch: {
            plan() {
                if (this.button_disabled && this.plan_message !== "" && this.plan !== null && this.plan !== 0) {
                    this.button_disabled = false;
                    this.plan_message = "";
                    this.btn_select_plan = false;
                }
                this.btn_disabled = true;
                

                if (this.plan != 0) {
                    this.subscribe(this.plan)
                    this.btn_loading_payment = true;
                    this.btn_select_plan = false;
                }else{
                    this.btn_select_plan = true
                }
                
            }
        },

        created() {
            if (localStorage.getItem("_plan") !== null) {
                this.plan = localStorage.getItem("_plan");
            } else {

            }

            this.$store.dispatch("GET_HOME_PLAN");

            // Check Users Status
            if (this.$auth.isAuthenticated() == "payment_step") {
                axios
                    .get("/api/v1/get/check/user")
                    .then(response => {
                        if (response.data.status !== "payment_step") {
                            this.$router.push({
                                name: "discover"
                            });
                        } else {
                            this.show = true;
                            this.user = response;
                            this.name = response.name;
                            this.email = response.email;
                            if (localStorage.getItem("_plan") == null) {
                                this.button_disabled = true;
                                this.plan_message = "You should choose plan";
                            }
                        }
                    })
                    .catch(error => {
                        if (error.response.status === 401) {
                            this.$auth.destroyToken();
                        }
                    });
                    if (localStorage.getItem("_plan") == null) {
                        this.button_disabled = true;
                        this.plan_message = "You should choose plan";
                        this.btn_disabled = true;
                    }
                
            } else {
                this.$router.push({
                    name: "home"
                });
            }

        },

        mounted() {

            let vm = this;

            

            // dropIn.create({
            //     // Insert your tokenization key here
            //     authorization: this.$Helper.sandbox_key(),
            //     container: '#dropin-container',
            //     paypal: {
            //         flow: 'vault',
            //         buttonStyle: {
            //             color: 'blue',
            //             shape: 'rect',
            //             size: 'medium'
            //         }
            //     },
            //     card: {
            //         overrides: {
            //             styles: {
            //                 //      backgroundColor: '#000000',
            //                 input: {
            //                     color: '#ffffff',
            //                     'font-size': '18px',
            //                     'font-weight': 'bold'
            //                 },

            //                 '.number': {
            //                     'font-family': 'monospace'
            //                     // Custom web fonts are not supported. Only use system installed fonts.
            //                 },
            //                 '.invalid': {
            //                     color: '#F44336'
            //                 },
            //                 ':focus': {
            //                     color: '#ffffff'
            //                 }

            //             }
            //         }
            //     }
            // }, function (createErr, instance) {
            //     vm.$refs.submit.addEventListener('click', function () {

            //         // Run load button
            //         vm.button_loading = true;

            //         instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {

            //             if (requestPaymentMethodErr) {
            //                 vm.error = requestPaymentMethodErr.message;
            //                 vm.button_loading = false;
            //                 return
            //             } else {
            //                 // Send request
            //                 vm.error = '';
            //                 vm.PAY(payload.nonce);
            //             }

            //         });
            //     });
            // });

        },

        methods: {
            PAY(payment) {
                axios
                    .post("/api/v1/register/payment", {
                        payment: payment,
                        plan: this.plan
                    })
                    .then(
                        res => {
                            if (res.data.status === "success") {
                                this.show = false;
                                // this.button_loading = false;
                                this.email = res.data.email;
                                this.name = res.data.name;
                                console.log(this.user)
                                // this.trail_end = res.data.trail_end;
                                // this.card_number = res.data.card_number;
                                // this.card_brand = res.data.card_brand;
                                this.finish = true;
                                localStorage.removeItem("_plan");
                                this.$auth.setUpdate(null, null, null, "confirm_step");
                            }
                        },
                        error => {
                            if (error.response.status === 500) {
                                this.error = error.response.data.message;
                                this.button_loading = false;
                            }
                        });
            },

            subscribe(plan){
                let that = this;
                axios.post("/api/v1/subscription/create", {
                    plan: plan
                })
                .then(function(response){
                    console.log(response.status)
                    if (response.status == 200) {
                        that.subscription = response.data;
                        console.log(that.subscription); 
                        that.btn_loading_payment = false;
                        that.btn_disabled = false;
                    }
                    
                })
                .then(function(){
                    var options = {
                            "key": "rzp_test_YzGS3LWMMVCO5S",
                            "subscription_id": that.subscription.id,
                            "name": "Merchant Name",
                            "description": "Purchase Description",
                            "image": "/images/logo.png",
                            "handler": function (response){
                                that.PAY(response.razorpay_payment_id);
                            },
                            "prefill": {
                                "name": "Customer Name",
                                "email": "test@email.com"
                            },
                            "notes": {
                                "address": "Hello World"
                            },
                            "theme": {
                                "color": "#F37254"
                            }
                        };
                        var rzp1 = new Razorpay(options);
                        setTimeout(function(){
                            document.getElementById('rzp-button1').onclick = function(e){
                                rzp1.open();
                                e.preventDefault();
                            }
                        }, 100);
                        
                })
                .catch(function(error){
                    alert('An error occurred please refresh your browser: '+ error);
                })
                
            },

            LOG_OUT() {
                this.$store.dispatch("LOGOUT_AUTH");

            },

            GO_HOME() {
                this.$router.go("/app");
            }
        }
    };
</script>

<style scoped>
    .braintree-option {
        background-color: #03A9F4;
        border-color: transparent;
    }
</style>
