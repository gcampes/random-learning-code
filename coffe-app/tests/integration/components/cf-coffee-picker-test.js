import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cf-coffee-picker', 'Integration | Component | cf coffee picker', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cf-coffee-picker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cf-coffee-picker}}
      template block text
    {{/cf-coffee-picker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
