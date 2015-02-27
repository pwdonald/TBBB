/// <reference path="../../_references.d.ts" />
/// <amd-dependency path="text!../../templates/header.html" />

import Backbone = require('backbone');

var headerTemplate = require('text!../../templates/header.html');

class HeaderView extends Backbone.View<Backbone.Model> {
    template: Function;

    constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
        this.el = '#header';
        this.template = _.template(headerTemplate);
        super(options);
    }

    public render() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
}

export = HeaderView; 