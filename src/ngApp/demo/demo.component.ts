import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {DemoHomeComponent} from "./home/demo-home.component";
import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";
import {YoutubePlaylistService} from "./youtube-playlist/youtube-playlist.service";
import {DemoTitleService} from "./demo-title.service";

@Component({
  selector: 'demo-template',
  moduleId: module.id,
  templateUrl: './demo.template.html',
  providers: [ YoutubePlaylistService, DemoTitleService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: "/",
    name: 'DemoHome',
    component: DemoHomeComponent,
    useAsDefault: true
  },
  {
    path: "/youtube-playlist",
    name: 'DemoYoutubePlaylist',
    component: YoutubePlaylistComponent
  }
])
export class DemoComponent{

  title1: string;
  title2: string;

  constructor(private demoTitleService: DemoTitleService) {
    demoTitleService.title1.subscribe((ttl1) => {
      this.title1 = ttl1;
    });
    demoTitleService.title2.subscribe((ttl2) => {
      this.title2 = ttl2;
    });
  }

}
