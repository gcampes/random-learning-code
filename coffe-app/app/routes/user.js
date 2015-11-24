import Ember from 'ember';

export default Ember.Route.extend({
  url: null,

  model: function(){
    return this.store.findAll('user');
  }
});
