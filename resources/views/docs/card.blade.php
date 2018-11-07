<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body>
	<style>
		.pos{
			position: relative;
			/*background-image: url('/images/r2h-card-bg.png');*/
		/*	background-repeat: no-repeat;
			background-position: center;*/
			/*height: 600px;*/
		}
		.pos-ab{
			position: absolute;
			top: 10px;
			left: 10%;
		}
		.pos-abs{
			position: absolute;
			bottom: 23%;
			left: 10%
		}
	</style>
	<img src="images/r2h-card-bg.png" class="pos mt-3 px-4"> 
	<img src="images/logo-beta-red.png" class="pos-ab ">
	<div class="pos-abs">
		<h3 style="color: #dcdcdc; font-weight: 400;">Registration No.</h3>
		<h1 class="">{{$req->id}} </h1>
		<h1>{{$req->first_name}} {{$req->last_name}}</h1>
	</div>
</body>
</html>