import Component from '@ember/component';
import { inject as service } from '@ember/service'

export default Component.extend({

      test: service('test-service'),
      data: [],
      init() {

            this._super(...arguments);
            let userData = this.test.getData();
            this.set('userData', userData);
            this.loadData();
            //console.log(userData);
            console.log('init method');
      },
      loadData() {
            console.log('load data');
            let head = this.get('userData');
            console.log(head);
            for (let i = 0; i < head.length; i++) {

                  let rowInfo = {
                        id: head[i].id,
                        name: head[i].name,
                        username: head[i].username,
                        email: head[i].email,
                        address: head[i].address,
                        phone: head[i].phone,
                        website: head[i].website,
                        company: head[i].company,
                  }

                  this.data.pushObject(rowInfo);
            }
            console.log(this.data);
      }
}
);
