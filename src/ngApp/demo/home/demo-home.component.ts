import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
  selector: 'demo-home-template',
  moduleId: module.id,
  templateUrl: './demo-home.template.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DemoHomeComponent{

}
