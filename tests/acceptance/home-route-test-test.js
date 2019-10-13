import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | home route test', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /home-route', async function(assert) {
    await visit('/home-route');

    assert.equal(currentURL(), '/home-route');
  });
});
