import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-imdt-modal-body', 'Integration | Component | ember imdt modal body', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-imdt-modal-body}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-imdt-modal-body}}
      template block text
    {{/ember-imdt-modal-body}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
