import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'blp-header',
    moduleId: module.id,
    templateUrl: './header.template.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent{

}

