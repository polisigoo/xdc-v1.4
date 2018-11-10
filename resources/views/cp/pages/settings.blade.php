@extends('cp.layout.app')

@section('content')
    <style>
        .mar-top{
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .fw{
            font-weight: 600;
        }
    </style>
    <div class="main">
        <div class="d-flex justify-content-center">
            <strong>User ID: {{Auth::user()->id}}</strong>
        </div>
        <form class="sub-main2" action="#">
            <div class="d-flex py-2 border mar-top pr-1">
                <div class="col-10">
                    <p class="fw m-0">Name :</p>
                    <p class="py-1 m-0">{{Auth::user()->first_name}} {{Auth::user()->last_name}}</p>
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center">
                    <button>Edit</button>
                </div>
            </div>
            <div class="d-flex py-2 border mar-top pr-1">
                <div class="col-10">
                    <p class="fw m-0">Email :</p>
                    <p class="py-1 m-0">{{Auth::user()->email}}</p>
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center">
                    <button>Edit</button>
                </div>
            </div>
            <div class="d-flex py-2 border mar-top pr-1">
                <div class="col-10">
                    <p class="fw m-0">Mobile Phone :</p>
                    <p class="py-1 m-0">{{Auth::user()->mobile_number}}</p>
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center">
                    <button>Edit</button>
                </div>
            </div>
            <div class="d-flex py-2 border mar-top pr-1">
                <div class="col-10">
                    <p class="fw m-0">Password :</p>
                    <p class="py-1 m-0">********</p>
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center">
                    <button>Edit</button>
                </div>
            </div>
        </form>
    </div>
@endsection