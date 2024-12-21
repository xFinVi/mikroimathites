<?php

namespace Database\Seeders;

use App\Enum\PermissionsEnum;
use App\Enum\RolesEnum;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $adminRole = Role::create(['name' => RolesEnum::Admin->value]);
        $userRole = Role::create(['name' => RolesEnum::User->value]);

        $manageFeauturesPermission = Permission::create(['name' => PermissionsEnum::ManageFeatures->value]);

        // $manageUsersPermission = Permission::create(['name' => PermissionsEnum::ManageUsers->value]);

        $upvoteDownvotePermissions = Permission::create(['name' => PermissionsEnum::UpvoteDownvote->value]);

        $adminRole->syncPermissions([$manageFeauturesPermission, $upvoteDownvotePermissions]);
        $userRole->syncPermissions([$upvoteDownvotePermissions]);

        User::factory()->create([
            'name' => 'User User',
            'email' => 'test@example.com',
        ])->assignRole(RolesEnum::User);
        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'terzi.fili@gmail.com',
        ])->assignRole(RolesEnum::Admin);
    }
}
