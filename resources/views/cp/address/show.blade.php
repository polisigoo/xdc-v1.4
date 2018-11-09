@extends('contents.layout.app')
@section('content') 
	<div class="container p-3 p-md-5">
		<div class="flex p-3 address-container w-75 " id="sm-100">
			<h5 class="border-top-0 border-left-0 border-right-0 address-border pl-md-2 pl-1 pb-2 mygrey">Mr. James John James</h5>
			<div id="details" class="pl-md-5 pl-4">
				<p class="mygrey-light">
					Raaga Films <br>
					Rajesh Jayswal <br>
					2C/103 ACME Complex <br>	
					Malad (West) Mumbai <br>
					Phone number : 09854321 <br>
					Alternative number: 0987654
				</p>
			</div>
			<div class="d-flex justify-content-end">
				<h6 class="pr-3 border-top-0 border-left-0 border-bottom-0  link-border"><a href="#">Edit</a></h6>
				<h6 class="ml-3"><a href="#">Delete</a></h6>
			</div>
		</div>
		<div class="d-flex p-3 address-container justify-content-center w-75 border-dashed mt-3  mt-md-5" id="sm-100">
			<div id="address-add" class="cursor-pointer d-flex flex-column justify-content-center pt-2 pb-2 mt-2 mb-2 pt-md-5 mt-md-5 pb-md-5 mb-md-5">
				<span class="d-flex justify-content-center" style="color: #ddd"><i class="fa fa-plus"></i></span>	
				<h5 class="d-flex justify-content-center mt-1 mygrey">Add Address</h5>
			</div>
			
		</div>
	</div>
@endsection

<style>
	
</style>