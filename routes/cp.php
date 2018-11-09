<?php

Route::get('/', 'DashboardController@home');

Route::get('/login','AuthController@showLoginForm' );
Route::post('/login','AuthController@login' );

Route::post('/logout', 'AuthController@logout');