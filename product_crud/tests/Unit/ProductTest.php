<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan as Artisan;
use App\Product;

class ProductTest extends TestCase
{
    public function setUp() {
        parent::setUp();
        Artisan::call('migrate:refresh', ['--database' => 'mysql_testing']);
        Artisan::call('db:seed', ['--database' => 'mysql_testing']);
    }

    public function testIndex()
    {
        $response = $this->get('/api/products');
        $response->assertStatus(200);
        $this->assertCount(50, $response->json());
    }

    public function testShow()
    {
        $response = $this->get('/api/product/1');
        $response->assertStatus(200);
    }

    public function testStore()
    {
        $data = [
            'name' => 'test1',
            'model_number' => 'test-1',
            'price' => 10000,
            'stock' => 10,
            'discontinued' => 0,
            'description' => '',
            'image_url' => ''
        ];
        $response = $this->post('/api/products', $data);
        $response->assertStatus(302);

        $item = Product::find($response->json()['id']);
        $this->assertInstanceOf(Product::class, $item);
    }

    public function testUpdate()
    {
        $data = ['name' => 'test_name_updated'];
        $response = $this->patch('/api/product/1', $data);
        $response->assertStatus(200);
        $response->assertJson($data);
        $item = Product::find(1);
        $this->assertSame('test_name_updated', $item->name);
    }

    public function testDelete()
    {
        $response = $this->delete('/api/product/1');
        $response->assertStatus(200);
        $this->assertNull(Product::find(1));
    }
}
