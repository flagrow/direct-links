<?php

namespace Flagrow\DirectLinks\Listeners;

use Flarum\Event\ConfigureWebApp;
use Illuminate\Contracts\Events\Dispatcher;

class Assets
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureWebApp::class, [$this, 'addAssets']);
    }

    public function addAssets(ConfigureWebApp $app)
    {
        if ($app->isForum()) {
            $app->addAssets([
                __DIR__ . '/../../js/forum/dist/extension.js',
            ]);

            $app->addBootstrapper('flagrow/direct-links/main');
        }
    }
}
