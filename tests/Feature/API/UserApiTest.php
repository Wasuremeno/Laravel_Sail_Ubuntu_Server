<?php

use App\Models\User;

beforeEach(function () {
    $this->user = User::factory()->create();
    $this->actingAs($this->user);
});

it('can get user profile via api', function () {
    $response = $this->getJson('/api/user');
    
    $response->assertStatus(200)
        ->assertJsonStructure(['id', 'name', 'email']);
});

it('can update user via api', function () {
    $response = $this->putJson('/api/user', [
        'name' => 'Updated Name',
        'email' => 'updated@example.com',
    ]);
    
    $response->assertStatus(200);
    $this->assertDatabaseHas('users', [
        'name' => 'Updated Name',
        'email' => 'updated@example.com',
    ]);
});