import Ember from 'ember';

export default Ember.Service.extend({

  /*
  Declare the options.
  */
  options:{
    title: null,
    body: null,
    bodyTemplate: null,
    overlay: true,
    time: 0,
    buttons: []
  },

  /*
  Declare the default options
  */
  defaultOptions:{
    title: null,
    body: null,
    bodyTemplate: null,
    overlay: true,
    time: 0,
    buttons: [
      {
        label: "Close",
        action: "modalClose"
      }
    ]
  },

  /*
  Modal confirm response
  */
  response: undefined,

  /*
  Display a custom modal from the given options
  */
  custom(options){
    this.setValues(options);
    this.show();
  },

  /*
  Sets the service's modal options from the parameters.
  */
  setValues(options){
    let defaultOptions = this.get('defaultOptions');

    if(options){
      this.set('response', undefined);
      this.set('options.title', options.title || defaultOptions.title);
      this.set('options.body', options.body || defaultOptions.body);
      this.set('options.bodyTemplate', options.bodyTemplate || defaultOptions.bodyTemplate);
      this.set('options.overlay', options.overlay || defaultOptions.overlay);
      this.set('options.time', options.time || defaultOptions.time);
      this.set('options.buttons', options.buttons || defaultOptions.buttons);
    }
  },

  /*
  Set the modal to a visible state
  */
  show(){
    let time = this.get('options.time');

    this.addClasses('willappear');
    setTimeout(() => {
      this.removeClasses('willappear');
      this.addClasses('visible');
    }, time);
  },

  /*
  Set the modal to an invisible state
  */
  hide(){
    this.removeClasses('visible');
  },


  /*
  Returns the modal overlay
  */
  overlay(){
    return $('.ember-imdt-modal-overlay');
  },

  /*
  Returns the modal element
  */
  modalElement(){
    return $('.ember-imdt-modal');
  },

  /*
  Display a confirm modal with the given options
  */
  confirm(body, time){
    let options = {
      title: "Confirm",
      body: body,
      overlay: true,
      time: time || 0,
      buttons: [
        {
          label: "Cancel",
          action: "modalCancel"
        },
        {
          label: "Ok",
          action: "modalConfirm"
        }
      ]
    }

    this.setValues(options);
    this.show(time);
  },

  /*
  Display an alert modal with the given options
  */
  alert(body, time){
    let options = {
      title: "Alert",
      body: body,
      time: time || 0,
      buttons: [
        {
          label: "Close",
          action: "modalClose"
        },
      ]
    }

    this.setValues(options);
    this.show(time);
  },

  /*
  Add the given class to the modal and overlay
  */
  addClasses(name){
    this.modalElement().addClass(name);
    this.overlay().addClass(name);
  },

  /*
  Remove the given class from the modal and overlay
  */
  removeClasses(name){
    this.modalElement().removeClass(name);
    this.overlay().removeClass(name);
  },
  // positionModal(){
  //   setTimeout(() => {
  //     let modal = this.modalElement();
  //
  //     let modalHeight =   modal.height() +
  //                  Number(modal.css('padding-top').replace('px', '')) +
  //                  Number(modal.css('padding-bottom').replace('px', ''));
  //
  //     let modalWidth =   modal.width() +
  //                 Number(modal.css('padding-left').replace('px', '')) +
  //                 Number(modal.css('padding-right').replace('px', ''));
  //
  //     let windowHeight = $(window).height();
  //     let windowWidth = $(window).width();
  //
  //     let top = windowHeight / 2 - modalHeight / 2 + "px";
  //     let left = windowWidth / 2 - modalWidth / 2 + "px";
  //
  //     modal.css('top', top);
  //     modal.css('left', left);
  //   });
  // },
});
