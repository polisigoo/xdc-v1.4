@extends('cp.layout.app')

<style>
	.btn-primary{
		background-color: #127CBC !important;
		color: #FFFFFF;
	}
</style>
@section('content-nonauth')
@if(count($errors))
	{{dd($errors)}}
@endif
@if ($errors->has('email'))
    <span class="help-block" style="color: red;">
    	<strong>{{ $errors->first('email') }}</strong>
    </span>
@endif
	<section class="container pt-md-5 pt-3">
		<div class="d-flex w-100 justify-content-center">
			<form method="POST" action="/login" class="box p-3 col-md-8 col-11">
				@csrf
				<div class="myform-group">
					<h3>Login to your Dashboard</h3>
					<label>
						Email ID
					</label>
					<input type="text" name="email" class="myform-control ">
				</div>
				<div class="form-group mt-3 ">
					<label>
						Password
					</label>
					<input type="password" name="password" class="myform-control ">
				</div>
				<div class="form-group d-flex justify-content-start">
					<button type="submit" class="btn btn-primary">Login</button>
				</div>
			</form>
		</div>
	</section>
@endsection
