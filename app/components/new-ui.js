import Component from '@ember/component';
import { inject as service } from '@ember/service'
export default Component.extend({

      test: service('test-service'),

      init() {
            this._super(...arguments);
            let userData = this.test.getData();
            console.log(userData);
      },
});
