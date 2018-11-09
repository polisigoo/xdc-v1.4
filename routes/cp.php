<?php

Route::get('/', 'DashboardController@home');
Route::get('/james', function() {
    return "James";
});

Route::get('/login','AuthController@showLoginForm' );
Route::post('/login','AuthController@login' );