<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Product;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return $products;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $product = new Product;
      $product->name = $request->name;
      $product->modelNumber = $request->modelNumber;
      $product->price = $request->price;
      $product->stock = $request->stock;
      $product->discontinued = $request->discontinued;
      $product->description = $request->description;
      $product->save();
      return redirect('api/products');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);
        return $product;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $product = Product::find($id);
      $product->name = $request->name;
      $product->modelNumber = $request->modelNumber;
      $product->price = $request->price;
      $product->stock = $request->stock;
      $product->discontinued = $request->discontinued;
      $product->description = $request->description;
      $product->save();
      return redirect("api/products/".$id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $product = Product::find($id);
      $product->deleted_at = date('Y-m-d H:i:s');
      return redirect('api/products');
    }
}
