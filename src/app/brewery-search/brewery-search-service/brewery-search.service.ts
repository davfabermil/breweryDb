import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Breweries} from '../../models/Breweries';
import { environment } from 'src/environments/environment';

@Injectable()

export class BrewerySearchService {

  constructor(private http: HttpClient) { }
  private breweryListUrl = `${environment.apiUrls.breweries}`;

  getAll(): Observable<Breweries[]>{
    return this.http.get<Breweries[]>(this.breweryListUrl);
  }
}
