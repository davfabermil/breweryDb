import { Component, OnInit } from '@angular/core';
import  { BrewerySearchService } from './brewery-search/brewery-search-service/brewery-search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BrewerySearchService]
})
export class AppComponent {
  title = 'nmlDemo';
}
