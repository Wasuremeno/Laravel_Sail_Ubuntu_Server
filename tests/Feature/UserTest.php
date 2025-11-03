<?php

use App\Models\User;

it('can create a user', function () {
    $user = User::factory()->create();
    
    expect($user)->toBeInstanceOf(User::class);
});

it('has email attribute', function () {
    $user = User::factory()->create(['email' => 'test@example.com']);
    
    expect($user->email)->toBe('test@example.com');
});