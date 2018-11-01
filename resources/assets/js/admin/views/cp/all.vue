<template>
	<div class="container">
		<div class="spinner-load" v-if="spinner_loading">
	        <Loader></Loader>
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
					<button class="btn btn-primary btn-sm" @click="accept(req.id)">Accept</button>
					<button class="btn btn-danger btn-sm ml-3" @click="reject(req.id)">Reject</button>
				</div>
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
		    	axios.get("api/cp/request/accept/"+ id).then(res => {
		    		axios.get("api/cp/request/getunresolved").then(res => {
			    		this.spinner_loading = false;
			    		this.reqs = res.data;
			        });
		        });
	    	},
	    	reject(id){
	    		axios.get("api/cp/request/reject/"+ id).then(res => {
		    		axios.get("api/cp/request/getunresolved").then(res => {
			    		this.spinner_loading = false;
			    		this.reqs = res.data;
			        });
		        });
	    	}
	    }
	    
	}
	
</script>