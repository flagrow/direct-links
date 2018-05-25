const gulp = require('flarum-gulp');

gulp({
    modules: {
        'flagrow/direct-links': [
            'src/**/*.js',
        ],
    },
});
