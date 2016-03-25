import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {AboutMeComponent} from "./me/me.component";
import {AboutDisclaimerComponent} from "./disclaimer/disclaimer.component";

@Component({
  selector: 'about-template',
  moduleId: module.id,
  templateUrl: './about.template.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: "/",
    name: 'AboutMe',
    component: AboutMeComponent,
  },
  {
    path: "/me",
    name: 'AboutMe',
    component: AboutMeComponent,
    useAsDefault: true
  },
  {
    path: "/disclaimer",
    name: 'AboutDisclaimer',
    component: AboutDisclaimerComponent
  }

])
export class AboutComponent{

}
