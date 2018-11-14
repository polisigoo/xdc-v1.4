<template>
    <div class="main">
        <div class="d-flex justify-content-center">
            <strong>User ID: {{user.id}}</strong>
        </div>
        <form class="sub-main2" action="#">
            <div class="d-flex py-2 border mar-top pr-1">
                <div class="col-10">
                    <p class="fw m-0">Name :</p>
                    <input type="text" id="nameForm" class="mt-2 myform-control col-md-8 col-10" style="display: none" v-model="name">
                    <p class="py-1 m-0">{{user.first_name}} {{user.last_name}}</p>
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center">
                    <button type="button" class="btn btn-outline-secondary btn-sm px-2 px-md-3 " v-if="nameDisplay" @click="makeEditable('nameForm')">Edit</button>
                    <button type="button" class="btn btn-outline-primary btn-sm px-2 px-md-3 " v-if="!nameDisplay" @click="save('nameForm')">Save</button>
                </div>
            </div>
            <div class="d-flex py-2 border mar-top pr-1">
                <div class="col-10">
                    <p class="fw m-0">Email :</p>
                    <input type="email" id="emailForm" class="mt-2 myform-control col-md-8 col-10" style="display: none;" v-model="email">
                    <p class="py-1 m-0">{{user.email}}</p>
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center">
                    <button type="button" class="btn btn-outline-secondary btn-sm px-2 px-md-3 " v-if="emailDisplay" @click="makeEditable('emailForm')">Edit</button>
                    <button type="button" class="btn btn-outline-primary btn-sm px-2 px-md-3 " v-if="!emailDisplay" @click="save('emailForm')">Save</button>
                </div>
            </div>
            <div class="d-flex py-2 border mar-top pr-1">
                <div class="col-10">
                    <p class="fw m-0">Mobile Phone :</p>
                    <input type="email" id="phoneForm" class="mt-2 myform-control col-md-8 col-10" style="display: none;" v-model="phone">
                    <p class="py-1 m-0">{{user.mobile_number}}</p>
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center">
                    <button type="button" class="btn btn-outline-secondary btn-sm px-2 px-md-3 " v-if="phoneDisplay" @click="makeEditable('phoneForm')">Edit</button>
                    <button type="button" class="btn btn-outline-primary btn-sm px-2 px-md-3 " v-if="!phoneDisplay" @click="save('phoneForm')">Saves</button>
                </div>
            </div>
            <div class="d-flex py-2 border mar-top pr-1">
                <div class="col-10">
                    <p class="fw m-0">Password :</p>
                    <input type="password" id="passwordForm" class="mt-2 myform-control col-md-8 col-10" style="display: none;" v-model="password">
                    <p class="py-1 m-0">********</p>
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center">
                    <button type="button" class="btn btn-outline-secondary btn-sm px-2 px-md-3 " v-if="passwordDisplay" @click="makeEditable('passwordForm')">Edit</button>
                    <button type="button" class="btn btn-outline-primary btn-sm px-2 px-md-3 " v-if="!passwordDisplay" @click="save('passwordForm')">Save</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "settings",
        data(){
              return {
                  user: JSON.parse(localStorage.user),
                  name: "",
                  nameDisplay: true,
                  emailDisplay: true,
                  phoneDisplay: true,
                  passwordDisplay: true,
                  email:"",
                  phone:"",
                  password:"",
                  csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
              }
        },
        created(){
            if (!localStorage.user){
                axios.get("/getAuth").then(res => {
                    this.user = res.data.user;
                    localStorage.setItem('user', JSON.stringify(res.data.user))
                })
            }
            this.name = `${this.user.first_name} ${this.user.last_name}`
            this.email = this.user.email;
            this.phone = this.user.mobile_number;

        },
        methods: {
            makeEditable(id){
                let input = document.querySelector(`#${id}`);
                this.toggleLastP(input.parentElement);
                this.toggleInputDisplay(input);
                if (id === "nameForm"){
                    this.nameDisplay = false;
                }
                if (id === "emailForm"){
                    this.emailDisplay = false;
                }
                if (id === "phoneForm"){
                    this.phoneDisplay = false;
                }
                if (id === "passwordForm"){
                    this.passwordDisplay = false;
                }

            },
            toggleInputDisplay(inp){
                inp.style.display === "none"? inp.style.display = "block": inp.style.display="none";
            },
            toggleLastP(parent){
                if ( parent.querySelector('p:last-of-type').style.display === "none"){
                    parent.querySelector('p:last-of-type').style.display = "block";
                }
                else {
                    parent.querySelector('p:last-of-type').style.display = "none";
                }

            },
            save(id){
                let formData = new FormData();
                let input = document.querySelector(`#${id}`);
                let parent = input.parentElement;
                formData.set('csrf_token', this.csrf);
                if (id === "nameForm"){
                    formData.set('name', this.name);
                    this.nameDisplay = true;
                }
                if (id === "emailForm"){
                    formData.set('email', this.email);
                    this.emailDisplay = true;
                }
                if (id === "phoneForm"){
                    formData.set('mobile', this.phone);
                    this.phoneDisplay = true;
                }
                if (id === "passwordForm"){
                    formData.set('password', this.password);
                    this.passwordDisplay = true;
                }
                this.toggleInputDisplay(input);
                this.toggleLastP(parent);

                axios.post("/settings/update", formData).then( res => {
                    swal("Successful",res.data.message, "success");

                    axios.get("/getAuth").then(res => {
                        this.user = res.data.user;
                        localStorage.setItem('user', JSON.stringify(res.data.user))
                    })
                }).catch(err => {
                    swal("Oops",err.response.data.message, "error");
                    console.log(err);
                });
            }
        },
    }
</script>

<style scoped>
    .mar-top{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .fw{
        font-weight: 600;
    }
</style>