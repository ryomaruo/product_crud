<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Product;

class ProductTest extends TestCase
{
    public function testUserCanGetHome()
    {
        $response = $this->get('/');
        // そんときのHTTPステータスコードは、200 
        $response->assertStatus(200);
    }

    public function testUserCanGetProductList()
    {
        $response = $this->get('/products');
        // そんときのHTTPステータスコードは、200 
        $response->assertStatus(200);
    }

    public function testUserCanGetApiProducts()
    {
        $response = $this->get('/api/products');
        // そんときのHTTPステータスコードは、200 
        $response->assertStatus(200);
    }

    public function testUserCanGetProductItem()
    {
        $response = $this->get('/api/products/1');
        // そんときのHTTPステータスコードは、200 
        $response->assertStatus(200);
    }

    public function testUserCanGetProductItem()
    {
        $response = $this->get('/api/products/1');
        // そんときのHTTPステータスコードは、200 
        $response->assertStatus(200);
    }

    public function testUserCanPoseProductItem()
    {
        $response = $this->post('/api/products/1');
        // そんときのHTTPステータスコードは、200 
        $response->assertStatus(200);
    }
}
