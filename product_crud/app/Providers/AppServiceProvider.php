<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\ProductServiceInterface;
use App\Services\ProductService;
use App\Repositories\ProductRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // ControllerでProductServiceインスタンスをsingletonで呼び出せるように設定。
        $this->app->singleton(
            ProductServiceInterface::class,
            ProductService::class
        );
        // ServiceでProductRepositoryインスタンスをsingletonで呼び出せるように設定。
        $this->app->singleton(
            'App\Repositories\ProductRepository',
            ProductRepository::class
        );
    }
}
