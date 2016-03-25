import { Component } from 'angular2/core';

@Component({
    selector: 'blp-footer',
    moduleId: module.id,
    templateUrl: './footer.template.html'
})
export class FooterComponent{
    copyrightYear = (new Date()).getFullYear();
}
