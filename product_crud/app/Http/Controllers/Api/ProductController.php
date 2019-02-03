<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Product;
use App\Http\Controllers\Controller;
use App\Services\ProductServiceInterface;

class ProductController extends Controller
{
    private $productService;

    /**
     * @param productServiceInterface $productServiceInterface
     */
    public function __construct(ProductServiceInterface $productServiceInterface)
    {
        $this->productService = $productServiceInterface;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->productService->fetchList();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $this->productService->save($request);
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
        return Product::find($id);
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
      $this->productService->save($request, $id);
      return redirect("api/products");
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
      $product->delete();
      return redirect('api/products');
    }
}
