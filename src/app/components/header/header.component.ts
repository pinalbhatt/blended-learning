import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {AuthSatusComponent} from "../../../ngApp/partials/authStatus/authStatus.component";
import {AngularFire} from "angularfire2/angularfire2";

@Component({
    selector: 'blp-header',
    moduleId: module.id,
    templateUrl: './header.template.html',
    providers: [],
    directives: [ROUTER_DIRECTIVES, AuthSatusComponent]
})
export class HeaderComponent{
  constructor(public af: AngularFire){}

}

