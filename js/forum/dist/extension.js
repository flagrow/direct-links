'use strict';

System.register('flagrow/direct-links/main', ['flarum/extend', 'flarum/app', 'flagrow/direct-links/components/LoginPage', 'flagrow/direct-links/components/SignupPage', 'flagrow/direct-links/components/ComposerPage'], function (_export, _context) {
    "use strict";

    var extend, app, LoginPage, SignupPage, ComposerPage;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flagrowDirectLinksComponentsLoginPage) {
            LoginPage = _flagrowDirectLinksComponentsLoginPage.default;
        }, function (_flagrowDirectLinksComponentsSignupPage) {
            SignupPage = _flagrowDirectLinksComponentsSignupPage.default;
        }, function (_flagrowDirectLinksComponentsComposerPage) {
            ComposerPage = _flagrowDirectLinksComponentsComposerPage.default;
        }],
        execute: function () {

            app.initializers.add('flagrow-direct-links', function () {
                app.routes.flagrowDirectLinksLogin = {
                    path: '/login',
                    component: LoginPage.component()
                };
                app.routes.flagrowDirectLinksSignup = {
                    path: '/signup',
                    component: SignupPage.component()
                };
                app.routes.flagrowDirectLinksComposer = {
                    path: '/composer',
                    component: ComposerPage.component()
                };
            });
        }
    };
});;
'use strict';

System.register('flagrow/direct-links/components/LoginPage', ['flagrow/direct-links/components/RedirectToHomeAndOpenModalPage', 'flarum/components/LogInModal'], function (_export, _context) {
    "use strict";

    var RedirectToHomeAndOpenModalPage, LogInModal, LoginPage;
    return {
        setters: [function (_flagrowDirectLinksComponentsRedirectToHomeAndOpenModalPage) {
            RedirectToHomeAndOpenModalPage = _flagrowDirectLinksComponentsRedirectToHomeAndOpenModalPage.default;
        }, function (_flarumComponentsLogInModal) {
            LogInModal = _flarumComponentsLogInModal.default;
        }],
        execute: function () {
            LoginPage = function (_RedirectToHomeAndOpe) {
                babelHelpers.inherits(LoginPage, _RedirectToHomeAndOpe);

                function LoginPage() {
                    babelHelpers.classCallCheck(this, LoginPage);
                    return babelHelpers.possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).apply(this, arguments));
                }

                babelHelpers.createClass(LoginPage, [{
                    key: 'createModal',
                    value: function createModal() {
                        return new LogInModal();
                    }
                }]);
                return LoginPage;
            }(RedirectToHomeAndOpenModalPage);

            _export('default', LoginPage);
        }
    };
});;
'use strict';

System.register('flagrow/direct-links/components/SignupPage', ['flagrow/direct-links/components/RedirectToHomeAndOpenModalPage', 'flarum/components/SignUpModal'], function (_export, _context) {
    "use strict";

    var RedirectToHomeAndOpenModalPage, SignUpModal, SignupPage;
    return {
        setters: [function (_flagrowDirectLinksComponentsRedirectToHomeAndOpenModalPage) {
            RedirectToHomeAndOpenModalPage = _flagrowDirectLinksComponentsRedirectToHomeAndOpenModalPage.default;
        }, function (_flarumComponentsSignUpModal) {
            SignUpModal = _flarumComponentsSignUpModal.default;
        }],
        execute: function () {
            SignupPage = function (_RedirectToHomeAndOpe) {
                babelHelpers.inherits(SignupPage, _RedirectToHomeAndOpe);

                function SignupPage() {
                    babelHelpers.classCallCheck(this, SignupPage);
                    return babelHelpers.possibleConstructorReturn(this, (SignupPage.__proto__ || Object.getPrototypeOf(SignupPage)).apply(this, arguments));
                }

                babelHelpers.createClass(SignupPage, [{
                    key: 'createModal',
                    value: function createModal() {
                        return new SignUpModal();
                    }
                }]);
                return SignupPage;
            }(RedirectToHomeAndOpenModalPage);

            _export('default', SignupPage);
        }
    };
});;
'use strict';

System.register('flagrow/direct-links/components/RedirectToHomeAndOpenModalPage', ['flarum/app', 'flarum/components/Page'], function (_export, _context) {
    "use strict";

    var app, Page, RedirectToHomeAndOpenModalPage;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }],
        execute: function () {
            RedirectToHomeAndOpenModalPage = function (_Page) {
                babelHelpers.inherits(RedirectToHomeAndOpenModalPage, _Page);

                function RedirectToHomeAndOpenModalPage() {
                    babelHelpers.classCallCheck(this, RedirectToHomeAndOpenModalPage);
                    return babelHelpers.possibleConstructorReturn(this, (RedirectToHomeAndOpenModalPage.__proto__ || Object.getPrototypeOf(RedirectToHomeAndOpenModalPage)).apply(this, arguments));
                }

                babelHelpers.createClass(RedirectToHomeAndOpenModalPage, [{
                    key: 'init',
                    value: function init() {
                        babelHelpers.get(RedirectToHomeAndOpenModalPage.prototype.__proto__ || Object.getPrototypeOf(RedirectToHomeAndOpenModalPage.prototype), 'init', this).call(this);

                        m.route('/');

                        app.modal.show(this.createModal());
                    }
                }, {
                    key: 'createModal',
                    value: function createModal() {
                        return null;
                    }
                }, {
                    key: 'view',
                    value: function view() {
                        return m('div');
                    }
                }]);
                return RedirectToHomeAndOpenModalPage;
            }(Page);

            _export('default', RedirectToHomeAndOpenModalPage);
        }
    };
});;
'use strict';

System.register('flagrow/direct-links/components/ComposerPage', ['flarum/app', 'flarum/components/Page', 'flarum/components/DiscussionComposer', 'flarum/components/LogInModal'], function (_export, _context) {
    "use strict";

    var app, Page, DiscussionComposer, LogInModal, ComposerPage;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }, function (_flarumComponentsDiscussionComposer) {
            DiscussionComposer = _flarumComponentsDiscussionComposer.default;
        }, function (_flarumComponentsLogInModal) {
            LogInModal = _flarumComponentsLogInModal.default;
        }],
        execute: function () {
            ComposerPage = function (_Page) {
                babelHelpers.inherits(ComposerPage, _Page);

                function ComposerPage() {
                    babelHelpers.classCallCheck(this, ComposerPage);
                    return babelHelpers.possibleConstructorReturn(this, (ComposerPage.__proto__ || Object.getPrototypeOf(ComposerPage)).apply(this, arguments));
                }

                babelHelpers.createClass(ComposerPage, [{
                    key: 'init',
                    value: function init() {
                        babelHelpers.get(ComposerPage.prototype.__proto__ || Object.getPrototypeOf(ComposerPage.prototype), 'init', this).call(this);

                        if (!app.session.user) {
                            app.modal.show(new LogInModal());

                            return;
                        }

                        var params = m.route.param();

                        m.route('/');

                        setTimeout(function () {
                            var composerProps = {
                                user: app.session.user
                            };

                            if (params.content) {
                                composerProps.originalContent = params.content;
                            }

                            var component = new DiscussionComposer(composerProps);

                            if (params.title) {
                                component.title(params.title);
                            }

                            if (params.tag) {
                                var tag = app.store.getBy('tags', 'slug', params.tag);

                                if (tag) {
                                    var parent = tag.parent();

                                    component.tags = parent ? [parent, tag] : [tag];
                                }
                            }

                            app.composer.load(component);
                            app.composer.show();
                        }, 0);
                    }
                }, {
                    key: 'view',
                    value: function view() {
                        return m('div');
                    }
                }]);
                return ComposerPage;
            }(Page);

            _export('default', ComposerPage);
        }
    };
});