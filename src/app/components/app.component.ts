import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {HTTP_PROVIDERS} from "angular2/http";
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire, firebaseAuthConfig, AuthMethods, AuthProviders} from "angularfire2/angularfire2";
import {NameListService} from '../../shared/services/name-list.service';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {WelcomeComponent} from "../../ngApp/welcome/welcome.component";
import {SigninComponent} from "../../ngApp/signin/signin.component";
import {AboutComponent} from '../../ngApp/about/about.component';
import {DemoComponent} from "../../ngApp/demo/demo.component";

@Component({
  selector: 'blp-app-main',
  viewProviders: [NameListService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  providers: [HTTP_PROVIDERS, FIREBASE_PROVIDERS, defaultFirebase('https://roken.firebaseio.com'),
    firebaseAuthConfig({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
      scope: ['email']
    })
  ],
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent]
})
@RouteConfig([
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeComponent
  },
  { path: '/welcome',
    name: 'Welcome',
    component: WelcomeComponent,
    useAsDefault: true
  },
  { path: '/about/...',
    name: 'About',
    component: AboutComponent
  },
  {
    path: "/signin",
    name: "Signin",
    component: SigninComponent
  },
  {
    path: "/demo/...",
    name: "Demo",
    component: DemoComponent
  }
])
export class AppComponent {}
