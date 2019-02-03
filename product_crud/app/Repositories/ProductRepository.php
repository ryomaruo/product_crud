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
    public function create(array $data)
    {
        $product = new Product;
        $product->name = $data['name'];
        $product->model_number = $data['model_number'];
        $product->price = $data['price'];
        $product->stock = $data['stock'];
        $product->discontinued = $data['discontinued'];
        $product->description = $data['description'];
        $product->image_url = $data['image_url'];
        return $product->save();
    }

    // show the record with the given id
    public function fetch($id)
    {
        return Product::findOrFail($id);
    }

    // update record in the database
    public function update(array $data, $id)
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
