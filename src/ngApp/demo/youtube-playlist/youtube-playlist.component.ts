import {Component, Output, OnInit} from 'angular2/core';
import {YoutubePlaylistService} from "./youtube-playlist.service";
import {Subscription} from "rxjs/Subscription";
import {DemoTitleService} from "../demo-title.service";


@Component({
  selector: 'youtube-playlist-demo',
  moduleId: module.id,
  templateUrl: './youtube-playlist.template.html'
})
export class YoutubePlaylistComponent implements OnInit {

  subscription: Subscription
  title1: string =  "YouTube PlayList";
  title2: string =  "Demo for HTTP";
  constructor(private _youtubePlaylistService: YoutubePlaylistService, private _demoTitleService: DemoTitleService){
    this._demoTitleService.updateTitle1(this.title1);
    this._demoTitleService.updateTitle2(this.title2);
  }
  playlistItems: any[];
  ngOnInit(){
    this.getPlaylistItems("PLcaPT6_oTzIdivjoNcuPCaIzvpbe_8XzT");

  }

  getPlaylistItems(playlistId: string){
    this._youtubePlaylistService.getPlaylist(playlistId)
      .subscribe(items => this.playlistItems = items );
  }
}
