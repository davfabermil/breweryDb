import { Component, OnInit } from '@angular/core';
import  { BrewerySearchService } from './brewery-search-service/brewery-search.service';
import { Breweries } from '../models/Breweries';
import {TableFilterPipe} from '../shared/tableFiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brewery-search',
  templateUrl: './brewery-search.component.html',
  styleUrls: ['./brewery-search.component.scss']
})
export class BrewerySearchComponent implements OnInit {
breweries: Breweries[]=[];


  constructor( private brewerySearchService: BrewerySearchService) { }

  ngOnInit() {
console.log('GetBreweriesMain');
    this.getBreweries();
  }

  getBreweries(){
    this.brewerySearchService.getAll().subscribe(
      breweries => this.breweries = breweries);
  }
}
