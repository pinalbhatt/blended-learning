import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {DemoHomeComponent} from "./home/demo-home.component";
import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";
import {YoutubePlaylistService} from "./youtube-playlist/youtube-playlist.service";

@Component({
  selector: 'demo-template',
  moduleId: module.id,
  templateUrl: './demo.template.html',
  providers: [ YoutubePlaylistService],
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

}
