# Direct Links by ![Flagrow logo](https://avatars0.githubusercontent.com/u/16413865?v=3&s=20) [Flagrow](https://discuss.flarum.org/d/1832-flagrow-extension-developer-group), a project of [Gravure](https://gravure.io/)

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/flagrow/direct-links/blob/master/LICENSE.md) [![Latest Stable Version](https://img.shields.io/packagist/v/flagrow/direct-links.svg)](https://packagist.org/packages/flagrow/direct-links) [![Total Downloads](https://img.shields.io/packagist/dt/flagrow/direct-links.svg)](https://packagist.org/packages/flagrow/direct-links) [![Support Us](https://img.shields.io/badge/flagrow.io-support%20us-yellow.svg)](https://flagrow.io/support-us) [![Join our Discord server](https://discordapp.com/api/guilds/240489109041315840/embed.png)](https://flagrow.io/join-discord)

This extension adds direct links to various Flarum actions:

- `/login` will redirect to homepage and open the Log In modal
- `/signup` will redirect to homepage and open the Sign Up modal
- `/composer` will redirect to homepage and open the new discussion composer box

Additionally, you can pass `?title=`, `?content=` and `?tag=slug` parameters to `/composer` to define the default values in the editor.
Useful for share features or bookmarklets.

If you hit `/composer` while logged out, you will be prompted for login.
If the user does anything else than log in (close the modal or register) it's possible the values in the url get lost.
The user will have to load the original `/composer` url again to get those values back.

## Installation

Use [Bazaar](https://discuss.flarum.org/d/5151-flagrow-bazaar-the-extension-marketplace) or install manually:

```bash
composer require flagrow/direct-links
```

## Updating

```bash
composer update flagrow/direct-links
php flarum migrate
php flarum cache:clear
```

## Support our work

Check out how to support Flagrow extensions at [flagrow.io/support-us](https://flagrow.io/support-us).

## Security

If you discover a security vulnerability within Direct Links, please send an email to the Gravure team at security@gravure.io. All security vulnerabilities will be promptly addressed.

Please include as many details as possible. You can use `php flarum info` to get the PHP, Flarum and extension versions installed.

## Links

- [Flarum Discuss post](https://discuss.flarum.org/d/12452-flagrow-direct-links-links-for-login-and-new-discussion)
- [Source code on GitHub](https://github.com/flagrow/direct-links)
- [Report an issue](https://github.com/flagrow/direct-links/issues)
- [Download via Packagist](https://packagist.org/packages/flagrow/direct-links)

An extension by [Flagrow](https://flagrow.io/), a project of [Gravure](https://gravure.io/).
