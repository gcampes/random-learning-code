import Ember from 'ember';

export default Ember.Controller.extend({
  date: ['date'],
  sorted: Ember.computed.sort('model.history', 'date'),
});
