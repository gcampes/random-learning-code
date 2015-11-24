import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addUser(desc){
      var newUser = this.store.createRecord('user', {
        name: desc
      });
      newUser.save();
    }
  }
});
