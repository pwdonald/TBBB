/// <reference path="../typings/tsd.d.ts" />

import Backbone = require('backbone');
import $ = require('jquery');
import LayoutView = require('./views/layoutview');

class AppRouter extends Backbone.Router {
    layout: Backbone.View<any>;

    constructor(options?: Backbone.RouterOptions) {
        this.routes = {
            '': 'index',
            'test': 'goTest',
            '*action': 'goHome'
        };
        this.layout = new LayoutView();
        super(options);
    }

    public index() {
        console.log('test');
        this.layout.render();
    }

    public goHome() {
        console.log('home');
    }

    public goTest() {
        console.log('test');
    }

    public initialize() {
        Backbone.history.start({pushState: true});
    }
}

export = AppRouter;
