<?php

use Faker\Generator as Faker;

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->text(32),
        'model_number' => $faker->password,
        'price' => $faker->numberBetween(0,100000),
        'stock' => $faker->numberBetween(0,1000),
        'discontinued' => $faker->randomElement([1, 0]),
        'description' => $faker->text(300),
        'image_url' => 'https://i.gyazo.com/57fc7fb20cc0e5669526f8524e56a5b1.jpg',
    ];
});
