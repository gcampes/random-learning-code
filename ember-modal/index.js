/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-imdt-modal',

  included: function (app) {
      this._super.included(app);

      app.import('vendor/ember-imdt-modal.css');
  }
};
