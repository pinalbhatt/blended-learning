import { Component } from 'angular2/core';
import {FirebaseAuth, AuthProviders, AuthMethods} from "angularfire2/angularfire2";

@Component({
    selector: 'signin-template',
    moduleId: module.id,
    templateUrl: './signin.template.html'
})
export class SigninComponent{
  constructor(private  _fbAuth: FirebaseAuth){

  }

  public doFacebookLogin(){
    this._fbAuth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
      remember: 'default',
      scope: ['email']
    })
  }

  public doGithubLogin(){
    this._fbAuth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup,
      remember: 'default',
      scope: ['email']
    })
  }
}
