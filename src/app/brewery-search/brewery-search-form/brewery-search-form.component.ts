import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {BrewerySearchService } from '../brewery-search-service/brewery-search.service';
import {Breweries} from '../../models/Breweries';
import {TableFilterPipe} from '../../shared/tableFiler';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-brewery-search-form',
  templateUrl: './brewery-search-form.component.html',
  styleUrls: ['./brewery-search-form.component.scss'],
  providers: [TableFilterPipe]
})
export class BrewerySearchFormComponent implements OnInit {

  currentSort: any;
  breweryList: Breweries[] = [];
  breweryTempList: any;
  brewerySearch: string = '';
  brewerySearchOptions: string = 'name';

  constructor( private brewerySearchService: BrewerySearchService, private tableFilter: TableFilterPipe) { 
    this.breweryList = [];
  }

  ngOnInit() {
     this.getBreweries();
  }

  private getBreweries(){
  this.brewerySearchService.getAll().subscribe(
  breweries => {
    breweries.sort(function(a, b) {
      var valA = a.name.toUpperCase();
      var valB = b.name.toUpperCase();
      return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;
  });
    this.breweryList = breweries;
    this.breweryTempList= breweries;
      }
    );
  }
 

DoCheck(): void{
  if (this.brewerySearch ===''){
    this.breweryList = this.breweryTempList;
  }
}

  selectSearchText(event){
    event.target.select();
  }



  

}
