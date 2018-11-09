@extends('contents.layout.app')
@section('content')
	<form class="col-md-10 col-12 mt-2 mt-md-3 mb-4 pb-3">
		<div class="d-flex">
			<div class="form-group col-6">
				<label class="font-bold">First Name</label>
				<input type="text" name="f_name" class="myform-control">
			</div>
			<div class="form-group col-6">
				<label class="font-bold">Last Name</label>
				<input type="text" name="l_name" class="myform-control">
			</div>
		</div>
		<div class="d-flex">
			<div class="form-group col-md-10 col-12">
				<label class="font-bold">Email ID</label>
				<input type="email" name="email" class="myform-control">
			</div>
		</div>
		<div class="d-flex">
			<div class="form-group col-12">
				<label class="font-bold">Company / Production Name</label>
				<input type="text" name="company_name" class="myform-control">
			</div>
		</div>
		<div class="d-flex">
			<div class="form-group col-6">
				<label class="font-bold">Mobile / Contact Number</label>
				<input type="text" name="phone_num" class="myform-control">
			</div>
			<div class="form-group col-6">
				<label class="font-bold">Alternative Number</label>
				<input type="text" name="alt_num" class="myform-control">
			</div>
		</div>
		<div class="d-flex flex-column">
			<div class="form-group col-12">
				<label class="font-bold">Address</label>
				<input type="text" name="address" class="myform-control">
			</div>
			<div class="form-group col-12">
				<input type="text" name="address" class="myform-control">
			</div>
			<div class="form-group col-12">
				<input type="text" name="address" class="myform-control">
			</div>
			<div class="d-flex">
				<div class="form-group col-6">
					<input type="text" name="address" class="myform-control ">	
				</div>
				<div class="form-group col-6">
					<input type="text" name="address" class="myform-control mr-3">	
				</div>
			</div>
			<div class="d-flex">
				<div class="form-group col-6">
					<input type="text" name="address" class="myform-control ">	
				</div>
				<div class="form-group col-6">
					<input type="text" name="address" class="myform-control mr-3">	
				</div>
			</div>
		</div>
		<div class="d-flex col-12">
			<button class="btn btn-secondary rounded-0  w-25" id="w-sm-50">SAVE</button>
		</div>
	</form>
@endsection