<style>
	.btn-outline-primary{
		border-color: #127CBC !important;
		color: #127CBC;
	}
	.btn-outline-primary:hover{
		background-color: #127CBC !important;
		color: #FFFFFF;
	}
</style>
<header class="d-flex py-2 pr-3 pl-3 align-items-center pr-md-4 pl-md-4 w-100 myheader" style="height: auto;">
	<div id="logo" class="d-flex">
		<a href="{{env("APP_URL", $default = "r2h-live.in")}}"><img src="{{ asset('images/logo-beta-red.png') }}" class="mylogo"></a>
		<h4 class="text-uppercase ml-md-4 ml-2 mb-0 align-self-center myprimary">R2h live</h4>
	</div>
	@auth
		<div id="user" class="ml-auto d-flex">
			<img src="{{ asset('storage/'. Auth::user()->passport) }}" class="myavatar">
			<h5 class=" dropdown-toggle ml-2 mb-0 align-self-center cursor-pointer mygrey" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
				{{Auth::user()->first_name ." ". Auth::user()->last_name}}
	  	</h5>
	  	<div class="dropdown-menu mt-4 box border-0" aria-labelledby="dropdownMenuButton">
		    <a class="dropdown-item mygrey" href="/settings">Setting</a>
		    <form method="POST" action="/logout">
		    	@csrf
		    	<button class="dropdown-item mygrey">Logout</button>
		    </form>
		    {{-- <a class="dropdown-item mygrey" href="#">Logout</a> --}}
	  	</div>
		</div>
	@else
		<div class="ml-auto d-flex justify-content-end">
			<a class="btn btn-sm btn-outline-primary btn-md px-2" href="{{env("APP_URL", $default = "r2h-live.in")}}">
			Register</a>
		</div>
	@endauth
</header>