<?php
namespace App\Repositories;

use App\Product;
use App\Repositories\CrudRepositoryInterface;

class ProductRepository implements CrudRepositoryInterface
{
    // Get all instances of model
    public function fetchAll()
    {
        return Product::all();
    }

    // create a new record in the database
    public function create(Request $request)
    {
        $product = new Product;
        $product->name = $request->name;
        $product->model_number = $request->model_number;
        $product->price = $request->price;
        $product->stock = $request->stock;
        $product->discontinued = $request->discontinued;
        $product->description = $request->description;
        $product->image_url = $request->image_url;
        return $product->save();
    }

    // show the record with the given id
    public function fetch($id)
    {
        return Product::findOrFail($id);
    }

    // update record in the database
    public function update(Request $request, $id)
    {
        $record = Product::find($id);
        return $record->update($data);
    }

    // remove record from the database
    public function delete($id)
    {
        return Product::destroy($id);
    }
}
