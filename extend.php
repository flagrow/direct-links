<?php

namespace Flagrow\DirectLinks;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->route('/login', 'flagrow-direct-links-login')
        ->route('/signup', 'flagrow-direct-links-signup')
        ->route('/composer', 'flagrow-direct-links-composer')
];
