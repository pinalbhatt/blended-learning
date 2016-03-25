import { Component } from 'angular2/core';
import {YoutubePlaylistService} from "./youtube-playlist.service";


@Component({
  selector: 'youtube-playlist-demo',
  moduleId: module.id,
  templateUrl: './youtube-playlist.template.html'
})
export class YoutubePlaylistComponent{
  constructor(private _youtubePlaylistService: YoutubePlaylistService){}
  playlistItems: any[];
  ngOnInit(){
    this.getPlaylistItems("PLcaPT6_oTzIdivjoNcuPCaIzvpbe_8XzT");
  }

  getPlaylistItems(playlistId){
    this._youtubePlaylistService.getPlaylist(playlistId)
      .subscribe(items => this.playlistItems = items );
  }
}
