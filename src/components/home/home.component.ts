import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Home } from '../../models';
@Component({
    template: require('./home.component.html')
})
export class HomeComponent {
    home: Home;
    // selectedForm: FormData = null;

    constructor(private restService: RestService) {
        restService.getHome().subscribe((home: Home) => {
            this.home = home;
        });
    }

}
