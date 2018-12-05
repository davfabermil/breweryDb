import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { BrewerySearchService } from '../brewery-search-service/brewery-search.service';
import {Breweries} from '../../models/Breweries';
import {TableFilterPipe} from '../../shared/tableFiler';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormControl,FormGroup} from '@angular/forms';
import { TextAst } from '@angular/compiler';


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


  onSorted(sortItem: any) {
    this.currentSort = sortItem;
    this.breweryList.sort((a, b) => this.sortTable(a, b));

    if (this.brewerySearch !== '') {
      this.breweryList = this.tableFilter.transform(this.breweryList, this.brewerySearch);
    }else{
      this.breweryList = this.breweryTempList;
    }
  }

  private sortTable(sort1: any, sort2: any) {
    let sortValue1 = this.getSortingValue(sort1, this.currentSort.sortColumn);
    let sortValue2 = this.getSortingValue(sort2, this.currentSort.sortColumn);

    if (this.currentSort.sortDirection === 'asc') {
      return sortValue1 < sortValue2 ? -1 : 1;
    } else {
      return sortValue2 < sortValue1 ? -1 : 1;
    }
  }


  private getSortingValue(obj: any, properties: string) {
    if (properties.indexOf(',') === -1) {
      return obj[properties];
    }

    const propertiesArray = properties.split(',');
    const values = [];
    propertiesArray.forEach(key => {
      const itemKey = obj[key];
      if (itemKey !== undefined) {
        values.push(itemKey);
      }
    });
    return values.join(' ');
  }

  

}
