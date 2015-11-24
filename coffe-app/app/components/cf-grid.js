import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cf-grid'],

  actions: {
    delete(item){
      console.log(item.get('attributes'));
      var controller = this.get('targetObject');
      var store = this.get('targetObject.store');
      var modelName = controller.get('routeName');
      this.model.set(modelName, item);
      store
          .findRecord(modelName,
                      this.model.get(modelName).id)
                                    .then(function(item){
                                      item.deleteRecord();
                                      item.save();
                                     });
    }
  }
});
