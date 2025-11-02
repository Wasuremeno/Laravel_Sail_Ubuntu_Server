<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use App\Models\Japanese;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        \Inertia\Inertia::share('learnedWordsCount', function () {
            return Japanese::where('memorized', 1)->count();
              });
    }
}
