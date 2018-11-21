<?php

Route::post('/content/create', 'ContentController@create');
Route::get('/getAuth', 'DashboardController@getUser');
Route::get('/login','AuthController@showLoginForm');
Route::post('/login','AuthController@login');
Route::post('/logout', 'AuthController@logout');
Route::post('/settings/update', 'SettingsController@update');
Route::get('/{any}', 'DashboardController@home')->where('any', '.*');