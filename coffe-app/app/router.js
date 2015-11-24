import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', {}, function() {});
  this.route('history', {});
  this.route('user', {}, function() {
    this.route('new', {});
    this.route('update', {path:'/update/:id'});
  });
  this.route('coffee', {}, function() {
    this.route('update', {path:'/update/:id'});
    this.route('new', {});
  });
});

export default Router;
