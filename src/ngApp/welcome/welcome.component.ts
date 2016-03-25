import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'welcome-template',
    moduleId: module.id,
    templateUrl: './welcome.template.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WelcomeComponent{

}
