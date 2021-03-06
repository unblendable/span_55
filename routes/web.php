<?php
use Illuminate\Support\Facades\File;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return File::get(public_path() . '/old_web/index.html');
});

Route::get('/frontend', function() {
    return File::get(public_path(). '/frontend/index.html');
});

Route::get('/backend', function(){
    return File::get('../backend/dist/index.html');
});