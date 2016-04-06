import {Component, Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {AngularFire, FirebaseAuth} from "angularfire2/angularfire2";

@Component({
  selector: 'blp-auth-status',
  moduleId: module.id,
  templateUrl: './authStatus.template.html',
  directives: [ROUTER_DIRECTIVES]
})
export class AuthSatusComponent{
  constructor (@Inject(FirebaseAuth) public auth: FirebaseAuth, public af: AngularFire) {
    var x = auth;
  }
}

