<?php

use App\Models\User;

test('user can login', function () {
    $user = User::factory()->create();
    
    $response = $this->post('/login', [
        'email' => $user->email,
        'password' => 'password',
    ]);
    
    $response->assertRedirect('/home');
    $this->assertAuthenticated();
});

test('user cannot login with wrong password', function () {
    $user = User::factory()->create();
    
    $response = $this->post('/login', [
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);
    
    $this->assertGuest();
});