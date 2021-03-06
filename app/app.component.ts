import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { StockListComponent } from './stocks/stock-list.component';
import { StocksService } from './stocks/stock.service';
import { Configuration } from "./config/app.config";
import { WelcomeComponent } from './home/welcome.component';
import { StockDetailComponent } from './stocks/stock-detail.component';

@Component({
    selector: 'stockview-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Home</a></li>
                    <li><a [routerLink]="['Stocks']">Featured Stocks</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [StocksService,
                Configuration,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/stocks', name: 'Stocks', component: StockListComponent },
    { path: '/stock/:id', name: 'StockDetail', component: StockDetailComponent }
])
export class AppComponent {
    pageTitle: string = 'Stock View';
}
