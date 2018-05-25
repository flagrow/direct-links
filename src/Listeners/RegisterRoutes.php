<?php

namespace Flagrow\DirectLinks\Listeners;

use Flarum\Event\ConfigureForumRoutes;
use Illuminate\Contracts\Events\Dispatcher;

class RegisterRoutes
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureForumRoutes::class, [$this, 'routes']);
    }

    public function routes(ConfigureForumRoutes $event)
    {
        $event->get('/login', 'flagrow-direct-links-login');
        $event->get('/signup', 'flagrow-direct-links-signup');
        $event->get('/composer', 'flagrow-direct-links-composer');
    }
}
