import {Injectable} from "angular2/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class DemoTitleService {
  private _title1 = new Subject<string>();
  private _title2 = new Subject<string>();
  
  title1 = this._title1.asObservable();
  title2 = this._title2.asObservable();
  
  updateTitle1(ttl1: string){
    this._title1.next(ttl1);
  }
  updateTitle2(ttl2: string){
    this._title2.next(ttl2);
  }
}
