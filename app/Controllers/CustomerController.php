<?php namespace App\Controllers;

use CodeIgniter\Controller;
use App\Models\CustomerModel;

class CustomerController extends Controller
{
  protected $customer;
  protected $request;

  public function __construct()
  {
    $this->customer = new CustomerModel();
    $this->request = \Config\Services::request();
  }

  public function index()
  {
    return view('customer');
  }

  public function test()
  {
    $data = $this->customer->findAll();
    return json_encode($data);
  }

  public function create()
  {
    try {
      $json = $this->request->getJSON();
      $insert['name'] = $json->name;
      $insert['email'] = $json->email;
      $insert['phone'] = $json->phone;
      $insert['address'] = $json->address;
      $res = $this->customer->insert($insert);
      $response['success'] = true;
      $response['message'] = "Successful save";
      return json_encode($response);
    }catch (\Exception $e){
      $responsep['success'] = false;
      $response['message'] = $e->getMessage();
      return json_encode($response);
    }
  }
}
