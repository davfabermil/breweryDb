import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { BrewerySearchService } from './brewery-search.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Breweries} from '../../models/Breweries';
import { environment } from 'src/environments/environment';

describe('BrewerySearchService', () => {
  let service: BrewerySearchService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [BrewerySearchService]
    });
    service = TestBed.get(BrewerySearchService);
    http = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
