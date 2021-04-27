<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::updateOrCreate([
            'name' => 'Admin',
            'slug' => 'admin',
            'deletable' => false,
        ]);

        Role::updateOrCreate([
            'name' => 'User',
            'slug' => 'user',
            'deletable' => false,
        ]);
    }
}
