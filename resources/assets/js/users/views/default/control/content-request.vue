<template>
	<div class="modal fade" id="content-request-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  	<div class="modal-dialog" role="document" style="margin-top: 8%">
		    <div class="modal-content">
		      <div class="modal-header req-header primary">
		        <h5 class="modal-title text-black text-uppercase text-center w-100" id="exampleModalLabel">Content submission Request</h5>
		      </div>
		      <div class="modal-body">
		        <form class="content-request" enctype="multipart/form-data" @submit="sendReq" id="reqForm">
		        	<input type="hidden" name="_token" :value="csrf">
		        	<div class="d-flex">
		        		<div class="form-group col-6 pt-2">
		        			<label class="text-black text-capitalize">First Name</label>
		        			<input v-validate="'required'"  type="text" name="first_name" class="myform-control mb-1" required>
		        			<small class="text-danger">{{ errors.first('first_name') }}</small>
		        		</div>
		        		<div class="form-group col-6 pt-2">
		        			<label class="text-black text-capitalize">Last Name</label>
		        			<input  type="text" v-validate="'required'" name="last_name" class="myform-control" required>
		        			<small class="text-danger">{{ errors.first('last_name') }}</small>
		        		</div>
		        	</div>
		        	<div class="form-group col-12 pt-2">
		        		<label class="text-black text-capitalize">E-mail ID</label>
		        		<input v-validate="'required|email'" type="email"  name="email" class="myform-control" required>
		        		<small class="text-danger">{{ errors.first('email') }}</small>
		        	</div>
		        	<div class="form-group col-12 pt-2">
		        		<label class="text-black text-capitalize">Mobile / Contact Number</label>
		        		<input v-validate="'regex:^([+]*[0-9]+)$|max:10'" type="text" v-model="phone"  name="phone" class="myform-control mb-1" required>
		        		<small class="text-danger">{{ errors.first('phone') }}</small>
		        	</div>
		        	<div class="form-group col-12 pt-2">
		        		<label class="text-black text-capitalize">company / Production Name</label>
		        		<input type="text"  name="company" class="myform-control" required>
		        	</div>
		        	<div class="form-group col-12">
		        		<label class="text-black text-capitalize">Address</label>
		        		<input type="text" name="address1" placeholder="Address Line1: Apartment/Complex" class="myform-control mb-3" required>
		        		<input type="text" name="address2" placeholder="Address Line2: Street Name" class="myform-control" required>
		        	</div>
		        	<div class="d-flex">
		        		<div class="form-group col-6">
		        			<label class="text-black">Country</label>
		        			<select class="myform-control" v-model="country" name="country">
		        				<option v-for="country in countries" v-bind:value="country.id">{{country.name}}</option>
		        			</select>
		        		</div>
		        		<div class="form-group col-6">
		        			<label class="text-black">State</label>
		        			<select class="myform-control" name="state">
		        				<option v-for="state in states" v-bind:value="state.name">{{state.name}}</option>
		        			</select>
		        		</div>
		        	</div>
		    		<div class="d-flex">
		    			<div class="form-group col-6">
		    				<label class="text-black">City</label>
		    				<input type="text" name="city" class="myform-control">
		    			</div>
		    			<div class="form-group col-6">
		    				<label class="text-black">Zip Code</label>
		    				<input v-validate="'required|numeric'" type="text" v-model="zip" name="zip" class="myform-control mb-1">
		    				<small class="text-danger">{{ errors.first('zip') }}</small>
		    			</div>
					</div>
		        	<div class="form-group pt-2">
		        		<label class="text-black text-capitalize col-12">Content type</label>
		        		<div class="d-flex col-12">
		        			<div class="row">
		        				<div class="form-group col-12">
			        				<input type="checkbox" name="content_type[]" value="Movies - Feature films" class="" id="">
			        				<label class="text-black">Movies - Feature films</label>
			        			</div>
		        				<div class="form-group col-12">
			        				<input type="checkbox" name="content_type[]" value="Music Tracks / Videos" class="" id="">
			        				<label class="text-black">Music Tracks / Videos</label>
			        			</div>
		        				<div class="form-group col-12">
			        				<input type="checkbox" name="content_type[]" value="Web Series" class="" id="">
			        				<label class="text-black">Web Series</label>
			        			</div>
		        				<div class="form-group col-12">
			        				<input type="checkbox" name="content_type[]" value="Documentaries" class="" id="">
			        				<label class="text-black">Documentaries</label>
			        			</div>
		        				<div class="form-group col-12">
			        				<input type="checkbox" name="content_type[]" value="Children Shows" class="" id="">
			        				<label class="text-black">Children Shows</label>
			        			</div>
		        				<div class="form-group col-12">
			        				<input type="checkbox" name="content_type[]" value="others" class="" id="">
			        				<label class="text-black">Others</label>
			        			</div>
		        			</div>
		        			<div class="row">
		        				
		        				<div class="form-group col-12">
			        				<input type="checkbox" name="content_type[]" class="" id="">
			        				<label class="text-black text-capitalize">Movie - short films</label>
			        			</div>
		        				<div class="form-group col-12">
			        				<input type="checkbox" name="content_type[]" value="Tv shows" class="" id="">
			        				<label class="text-black text-capitalize">Tv shows</label>
			        			</div>
		        				<div class="form-group col-12">
			        				<input type="checkbox" name="content_type[]" value="Live Events(Recorded)" class="" id="">
			        				<label class="text-black text-capitalize">Live Events(Recorded)</label>
			        			</div>
		        				<div class="form-group col-12">
			        				<input type="checkbox" name="content_type[]" value="educational" class="" id="">
			        				<label class="text-black text-capitalize">Educational</label>
			        			</div>
		        				<div class="form-group col-12">
			        				<input type="checkbox" name="content_type[]" value="talk shows" class="" id="">
			        				<label class="text-black text-capitalize">Talk Shows
			        					
			        				</label>
			        			</div>
		        			</div>
		        			
		        		</div>
		        	</div>
		        		
					<div class="form-group col-12">
						<label class="text-black d-block">Upload a Passport size photo</label>

						<img src="" id="passimg" class="d-none mb-3 p-1" style="border:2px solid #a3a3a3;" width="150px" height="150px">

						<button class="w-50 py-2" type="button" @click="selectInp"><i class="fa fa-plus"></i></button>
						<input type="file" class="myform-control d-none" accept="image/*" id="passport" v-on:change="imageHandler()" length="1000000"  style="border:1px solid #ccc;" name="passport">
					</div>
					<div class="col">
						<vue-recaptcha 
					  		ref = "recaptcha"
					  		@verify="onCaptchaVerified"
	                  		@expired="onCaptchaExpired"
	                  		sitekey="6Lfq8HgUAAAAALWjBjFiF-Noe-JKyAM3ZoP1fXam" >
	                  			
	                  	</vue-recaptcha>
					</div>
				  	
						
					<!-- <div class="g-recaptcha" data-sitekey="6Lfq8HgUAAAAALWjBjFiF-Noe-JKyAM3ZoP1fXam" v-bind:data-callback="recaptcha"></div> -->
					<div class="d-flex justify-content-start mt-3">
						<div class="col-md-4 col-5">
							<button class="primary btn rounded-0 btn-sm w-100 text-white" v-if="!loading" style="cursor: pointer;" type="submit">Submit</button>
							<button class="primary btn rounded-0 btn-sm w-100 text-white" v-if="loading" type="button">Loading...</button>
						</div>
						
					</div> 
					<div class="d-flex col-12 pt-4">
						<p class="text-black col-12 mt-3"> <span class="text-danger">*</span>All of the above field types are mandatory</p>  
					</div>
					
		        </form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" id="mod-close" class="btn btn-secondary" data-dismiss="modal">Close</button>
		      </div>
		    </div>
	  	</div>
    </div>
</template>
<style>
	.primary{
		background-color: #44c5ed !important;
	}
	.text-black{
		color: #000;
	}
	.myform-control{
		padding: 6px 12px;
		display: block;
		width: 100%;
		font-size: 1rem;
	}
	@media screen and (max-width: 600px) {
		.content-request{
			font-size: 0.8rem;
		}
	}
</style>
<script>
	import swal from 'sweetalert';
	import VueRecaptcha from 'vue-recaptcha';
	export default {
		name: "request",
		components: { VueRecaptcha },
		data() {
			return {
				countries: [],
				states:[],
				country: 100,
				image: "",
				phone: "",
				zip: "",
				loading: false,
				csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
			};
		},
		created() {
			axios.get("api/countries/all").then(res => {
				this.countries = res.data;
				axios.get("/api/country/"+this.countries[0].id+"/states").then(resp => {
					this.states = resp.data;

				}).then(() =>{
					this.country = 94;
				});
		    });
		},
		watch: {
			// whenever country changes, this function will run
			country(){
				axios.get("/api/country/"+this.country+"/states").then(resp => {
					this.states = resp.data;
				});
			},
			
		},
		methods: {
			onCaptchaVerified(token){
				// console.log(token);
			},
			onCaptchaExpired(){
				this.$refs.recaptcha.reset();
			},
			sendReq(e){
				e.preventDefault();
				var myform = document.querySelector('#reqForm');
				var data = new FormData(myform);
				console.log()
				this.loading = true;
				if (data.getAll('content_type[]') == "") {
					swal("Oops!", "You must select at least one content type", "error");
					this.loading = false;
					return;
					
				}
				if (!document.querySelector('#passport').files[0] || document.querySelector('#passport').files[0].size > 1000*1024) {
					swal("Oops!", "You must upload a passport photograph", "error");
					this.loading = false
					return;
				}
				if(!this.phone.match('^([+]*[0-9]+)$') || this.phone.length > 10){
					swal("Oops!", "Your phone number is not in the correct format", "error");
					this.loading = false
					return;
				}
				if (!this.zip.match('^([0-9]+)$')) {
					swal("Oops!", "Your zip code is not in the correct format", "error");
					this.loading = false
					return;
				}
				if (!data.getAll('g-recaptcha-response')) {
					swal("Oops!", "You must pass the recaptcha challenge", "error");
					this.loading = false
					return;
				}

				axios.post('/content-provider/request', data).then(res =>{
					console.log(res.data);
					swal("Successful", res.data.message, "success");
					this.loading = false;
					document.querySelector('#mod-close').click();
					document.querySelector('#reqForm').reset();
				}).catch(err => {
					swal("Oops", err.response.data.message, "error");
					this.loading = false;
				});
			},
			selectInp(){
				document.querySelector('#passport').click();
				// alert('clicked');
			},
			imageHandler(){
				let img = document.querySelector('#passimg');
				let file = document.querySelector('#passport').files[0];
				if (file.size > 1000*1024) {
					swal('Oops', "Passport should not be larger than 1mb", 'error');
					return;
				}
			    if (file.type.startsWith('image/')) {
					img.file = file;
					img.classList = "d-block mb-3 p-1 ml-3"
					var reader = new FileReader();
					reader.onload = (function(a){
						return function(e){
							a.src = e.target.result
						}
					})(img)
					reader.readAsDataURL(file);
			    }

			},
		}

	}
</script>