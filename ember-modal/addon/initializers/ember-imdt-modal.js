export function initialize(container, application) {
  application.inject('route', 'modal', 'service:ember-imdt-modal');
  application.inject('controller', 'modal', 'service:ember-imdt-modal');
  application.inject('component', 'modal', 'service:ember-imdt-modal');
}

export default {
  name: 'modal',
  initialize: initialize
};
