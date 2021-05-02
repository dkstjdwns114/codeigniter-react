<?php namespace App\Controllers;

use CodeIgniter\Controller;

class CustomerController extends Controller
{

  function __construct()
  {
    // code...
  }

  public function index()
  {
    return view('customer');
  }
}
