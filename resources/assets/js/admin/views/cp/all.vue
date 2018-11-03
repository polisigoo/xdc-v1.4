<template>
	<div class="container">
		<div class="spinner-load" v-if="spinner_loading">
	        <Loader></Loader>
	    </div>
	    <div class="modal fade" id="reject-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  			<div class="modal-dialog" role="document" style="margin-top: 8%">
	    		<div class="modal-content w-75">
			    	<div class=" box py-3 px-4">
			    		<label>Enter a rejection message</label>
				    	<textarea id="reject" v-model="rejMsg" class="form-control" style="resize: none; height: 100px; padding: 10px;"></textarea> 
				    	<input type="hidden" name="id" v-model="rejId">
				    	<div class="d-flex mt-3 justify-content-end">
				    		<button class="btn btn-sm btn-danger" v-if="!rejecting" @click="reject()">Reject</button>
				    		<button class="btn btn-sm btn-danger" v-if="rejecting" @click="reject()">Loading...</button>
				    	</div>
			    	</div>
			    </div>
			</div>
		</div>
		<div v-if="!spinner_loading" class="row pl-md-5 pl-0">
			<div v-for="req in reqs" class="col-lg-9 col-md-11 col-12 box mt-3 py-3">
				<div class="d-flex f-2">
					<p class="col-4"><strong>Name :</strong></p> 
					<p class="ml-3">{{req.first_name}} {{req.last_name}}</p>
				</div>
				<div class="d-flex f-2">
					<p class="col-4"> <strong>Email :</strong></p> 
					<p class="ml-3">{{req.email}}</p>
				</div>
				<div class="d-flex f-2">
					<p class="col-4"> <strong>Company Name :</strong></p> 
					<p class="ml-3">{{req.company_name}}</p>
				</div>
				<div class="d-flex f-2">
					<p class="col-4"><strong>Mobile Number :</strong></p> 
					<p class="ml-3">{{req.mobile_number}}</p>
				</div>
				<div class="d-flex f-2">
					<p class="col-4"><strong>Content Types :</strong></p> 
					<p class="ml-3 text-capitalize">{{req.content_types}}</p>
				</div>
				<div class="d-flex justify-content-end">
					<button class="btn btn-primary btn-sm" v-if ="!accepting" @click="accept(req.id)">Accept</button>
					<button class="btn btn-secondary btn-sm" v-if ="accepting" >Loading..</button>
					<button class="btn btn-danger btn-sm ml-3" data-toggle="modal" data-target="reject-modal" @click="attach(req.id)">Reject</button>
				</div>
			</div>
			<div v-if="reqs.length == 0" class="col-lg-9 col-md-11 col-12 box mt-3 py-3">
				<h4>No Content Provider Request</h4>
			</div>
		</div>
	</div>
</template>

<style>
	.box{
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 0 4px #ccc;
	}
	.f-2{
		font-size: 1.05rem !important;
	}
	/* Smartphones (portrait and landscape) ----------- */
	@media only screen 
	and (min-device-width : 320px) 
	and (max-device-width : 480px) {
		.f-2{
			font-size: 0.8rem !important;
		}
	}
	/* iPads (portrait and landscape) ----------- */
	@media only screen 
	and (min-device-width : 320px) 
	and (max-device-width : 900px) {
		.f-2{
			font-size: 0.9rem !important;
		}
	}		
</style>

<script>
	import Loader from "../components/loader";
	export default{
		data() {
	        return {
	        	rejId: "",
	        	rejecting : false,
	        	accepting : false,
	            rejMsg: "",
	            reqs: [],
	            spinner_loading: false,

	        };
	    },
	    components: {
	        Loader
	    },
	    created(){
	    	this.spinner_loading = true;
	    	axios.get("api/cp/request/getunresolved").then(res => {
	    		this.spinner_loading = false;
	    		this.reqs = res.data;
	        });
	    },
	    methods: {
	    	accept(id){
	    		this.accepting = true;
		    	axios.get("api/cp/request/accept/"+ id).then(res => {
		    		axios.get("api/cp/request/getunresolved").then(res => {
			    		this.accepting = false;
			    		this.reqs = res.data;
			        });
		        });
	    	},
	    	reject(){
	    		if ( this.rejMsg.trim()  == "") {return}
	    		this.rejecting = true;
	    		axios.get("api/cp/request/reject/"+ this.rejId+ "/" + this.rejMsg).then(res => {
		    		axios.get("api/cp/request/getunresolved").then(res => {
			    		this.spinner_loading = false;
			    		this.reqs = res.data;
			    		this.rejecting = false;
			    		$('#reject-modal').modal('hide');
			        });
		        });
	    	},
	    	attach(id){
	    		this.rejId = id;
	    		$('#reject-modal').modal('show');
	    	}
	    }
	    
	}
	
</script>