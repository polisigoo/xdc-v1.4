@extends('contents.layout.app')
@section('content')
	<form class="col-md-11 col-12 mt-2 mt-md-3 mb-4 pb-3">
		<div class="form-group d-flex col-6">
			<label class="text-uppercase col-4 px-0">R2h id:</label>
			<select class="myform-control px-0 col-8">
				<option>1234</option>
				<option>1234</option>
				<option>1234</option>
			</select>
		</div>
		<div class="form-group col-6">
			<label>Content type</label>
			<select>
				<option>123456</option>
				<option>123456</option>
				<option>123456</option>
			</select>
		</div>
		<div class="form-group col-12">
			<label>Title Name</label>
			<input type="text" name="name" class="myform-control">
		</div>
		{{-- <div class="d-flex col-12">
			<div class="row">
				<div class="form-group ">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">Action</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">adventure</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">animation</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">biography</label>
				</div>
			</div>
	        <div class="row">
	        	<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">comedy</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">crime</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">documentary</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">drama</label>
				</div>
	        </div>
			<div class="row">
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">family</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">fantasy</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">film noir</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">history</label>
				</div>
			</div>
			<div class="row">
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">horror</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">music</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">musical</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">mystery</label>
				</div>
			</div>
			<div class="row">
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">romance</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">sci-Fi</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">short</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">sport</label>
				</div>
			</div>
			<div class="row">
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">superhero</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">thriller</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">war</label>
				</div>
				<div class="form-group">
					<input type="checkbox" class="" id="">
					<label class="text-black text-capitalize">western</label>
				</div>
			</div>
			
		</div> --}}
	</form>
@endsection