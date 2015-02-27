/// <reference path="../typings/tsd.d.ts" />

import Backbone = require('backbone');
import AppRouter = require('./router');

class App {
    router: AppRouter;

    constructor() {
        this.router = new AppRouter();
    }

    public initialize() {
        this.router.initialize();
    }
}

var app = new App();