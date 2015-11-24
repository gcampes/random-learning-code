import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveChanges(model){
      this.model.save();
    },
  }
});
