import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import Observable from 'rxjs/Rx';

@Injectable()
export class YoutubePlaylistService{
    constructor(private _http: Http){}

    getPlaylist(playlistId: string) {
      
        var url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyCscnmFBOxRBO36Az1Ytlw0K1KAVieGa64&playlistId=" + playlistId;
        return this._http.get(url)
            .map(function (response: Response) {
                var data: any[] = <any[]>response.json().items;
                return data;
            })
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || "server error");
    }
}
