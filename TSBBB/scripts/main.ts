/// <reference path="../typings/tsd.d.ts" />
require.config({
    paths: {
        'text': '../bower_components/requirejs-text/text',
        'underscore': '../bower_components/underscore/underscore',
        'backbone': '../bower_components/backbone/backbone',
        'jquery': '../bower_components/jquery/dist/jquery',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap'
    },
    deps: ['app']
});