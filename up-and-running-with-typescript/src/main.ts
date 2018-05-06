import { Person, SocialNetwork } from './social-network';

import * as _ from 'lodash';

import * as Rx from "rxjs";

Rx.Observable.timer(1000).subscribe((x: any) => console.log(x));

class App implements SocialNetwork {
  title = 'Eggheads';
  getUsers() {
    return [{
      name: 'Andrei'
    }];
  }
}

console.log(_.isArray(new App().getUsers()));