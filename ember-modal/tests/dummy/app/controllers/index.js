import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    confirm(){
      this.modal.confirm("This is a confirmation modal");
    },

    alert(){
      this.modal.alert("This is an alert modal", 1000);
    },

    custom(){
      let options = {
        title: "Custom",
        bodyTemplate: "custom/body",
        footerTemplate: "custom/footer",
        overlay: false
      };

      this.modal.custom(options);
    }
  }
});
