import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | new-ui', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{new-ui}}`);

    assert.equal(this.$('h1').text(), 'Information','h1 tag test');
    assert.equal(this.$('h2').text(), 'Table of HR contentsRegistration Form','h2 tag test');
    assert.equal(this.$('div').hasClass('col-lg-5'), true, 'form container'); 
    assert.equal(this.$('div').hasClass('col-lg-7'), true, 'table container');
    assert.equal(this.$('div').hasClass('col-lg-1'), false, 'form label name');
    assert.equal(this.$('div').hasClass('col-lg-11'), false, 'div empty');
    assert.equal(this.$('div').hasClass('col-lg-9'), false, 'div empty for form check ');
    assert.equal(this.$('div').hasClass('col-lg-3'), false, 'form check for true false');
    //assert.equal(this.$('div').hasClass('col-lg-9'), true, 'div empty for form check  ');

    // Template block usage:
    await render(hbs`
      {{#new-ui}}
        template block text
      {{/new-ui}}
    `);

    //assert.equal(this.element.textContent.trim(), 'Indo block text');
  });
});
