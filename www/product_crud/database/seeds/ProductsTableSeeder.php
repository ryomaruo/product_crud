<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
        [
          'name'          => 'test1',
          'model_number'   => 'm-N_1',
          'price'         => 12,
          'stock'         => 10,
          'discontinued'  => 0,
          'description'   => 'this is description1.',
          'image_url'     => 'https://i.gyazo.com/af0f2bff4b6b19f3f274947c543eb27c.jpg'
        ],
        [
          'name'          => 'test2',
          'model_number'   => 'm-N_2',
          'price'         => 123,
          'stock'         => 20,
          'discontinued'  => 1,
          'description'   => 'this is description2.this is description2.',
          'image_url'     => 'https://i.gyazo.com/af0f2bff4b6b19f3f274947c543eb27c.jpg'
        ],
        [
          'name'          => 'test3',
          'model_number'   => 'm-N_3',
          'price'         => 1234,
          'stock'         => 30,
          'discontinued'  => 0,
          'description'   => 'this is description3.this is description3.this is description3.',
          'image_url'     => 'https://i.gyazo.com/af0f2bff4b6b19f3f274947c543eb27c.jpg'
        ],
        [
          'name'          => 'test4',
          'model_number'   => 'm-N_4',
          'price'         => 12345,
          'stock'         => 40,
          'discontinued'  => 1,
          'description'   => 'this is description4.this is description4.this is description4.this is description4.',
          'image_url'     => 'https://i.gyazo.com/af0f2bff4b6b19f3f274947c543eb27c.jpg'
        ],
        [
          'name'          => 'test5',
          'model_number'   => 'm-N_5',
          'price'         => 123456,
          'stock'         => 50,
          'discontinued'  => 0,
          'description'   => "this is description5.\nthis is description5.\nthis is description5.\nthis is description5.\nthis is description5.\n",
          'image_url'     => 'https://i.gyazo.com/af0f2bff4b6b19f3f274947c543eb27c.jpg'
        ],
        [
          'name'          => 'test6',
          'model_number'   => 'm-N_6',
          'price'         => 1234567,
          'stock'         => 60,
          'discontinued'  => 1,
          'description'   => "this is description6.\nthis is description6.\nthis is description6.\nthis is description6.\nthis is description6.\nthis is description6.",
          'image_url'     => 'https://i.gyazo.com/af0f2bff4b6b19f3f274947c543eb27c.jpg'
        ],
        [
          'name'          => 'test7',
          'model_number'   => 'm-N_7',
          'price'         => 12345678,
          'stock'         => 70,
          'discontinued'  => 0,
          'description'   => "this is description7.\nthis is description7.\nthis is description7.\nthis is description7.\nthis is description7.\nthis is description7.\nthis is description7.\n",
          'image_url'     => 'https://i.gyazo.com/af0f2bff4b6b19f3f274947c543eb27c.jpg'
        ],
        [
          'name'          => 'test8',
          'model_number'   => 'm-N_8',
          'price'         => 123456789,
          'stock'         => 80,
          'discontinued'  => 1,
          'description'   => "this is description8.\nthis is description8.\nthis is description8.\nthis is description8.\nthis is description8.\nthis is description8.this is description8.\nthis is description8.",
          'image_url'     => 'https://i.gyazo.com/no_image_test.jpg'
        ]
      ]);
    }
}
