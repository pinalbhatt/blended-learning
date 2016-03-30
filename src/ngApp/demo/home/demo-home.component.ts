import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {DemoTitleService} from "../demo-title.service";
import {AngularFire} from "angularfire2/angularfire2";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'demo-home-template',
  moduleId: module.id,
  templateUrl: './demo-home.template.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DemoHomeComponent{
  title1: string =  "Angular 2 Demos";
  title2: string =  "My POCs";
  items: Observable<any[]>;
  constructor( private _demoTitleService: DemoTitleService, af: AngularFire){
    this._demoTitleService.updateTitle1(this.title1);
    this._demoTitleService.updateTitle2(this.title2);

    this.items = af.list('/v1/basic/a4/0/viewBoard');
  }
}
