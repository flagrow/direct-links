import {extend} from 'flarum/extend';
import app from 'flarum/app';
import LoginPage from 'flagrow/direct-links/components/LoginPage';
import SignupPage from 'flagrow/direct-links/components/SignupPage';
import ComposerPage from 'flagrow/direct-links/components/ComposerPage';

app.initializers.add('flagrow-direct-links', () => {
    app.routes.flagrowDirectLinksLogin = {
        path: '/login',
        component: LoginPage.component(),
    };
    app.routes.flagrowDirectLinksSignup = {
        path: '/signup',
        component: SignupPage.component(),
    };
    app.routes.flagrowDirectLinksComposer = {
        path: '/composer',
        component: ComposerPage.component(),
    };
});
