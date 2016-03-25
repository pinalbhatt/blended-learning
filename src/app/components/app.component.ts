import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {AboutComponent} from '../../about/components/about.component';
import {NameListService} from '../../shared/services/name-list.service';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {WelcomeComponent} from "../../ngApp/welcome/welcome.component";
import {SigninComponent} from "../../ngApp/signin/signin.component";

@Component({
  selector: 'blp-app-main',
  viewProviders: [NameListService],
  moduleId: module.id,
  templateUrl: './app.component.html',
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
  { path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: "/signin",
    name: "Signin",
    component: SigninComponent
  }
])
export class AppComponent {}
