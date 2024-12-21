<?php

namespace App\Enum;

enum PermissionsEnum: string
{

    case ManageFeatures = 'Manage_features';
    case ManageUsers = 'manage_users';
    case UpvoteDownvote = 'upvote_downvote';
}
