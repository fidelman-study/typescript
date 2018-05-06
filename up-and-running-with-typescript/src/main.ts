import { Person, SocialNetwork } from './social-network';

import * as _ from 'lodash';

class App implements SocialNetwork {
  title = 'Eggheads';
  getUsers() {
    return [{
      name: 'Andrei'
    }];
  }
}

console.log(_.isArray(new App().getUsers()));
