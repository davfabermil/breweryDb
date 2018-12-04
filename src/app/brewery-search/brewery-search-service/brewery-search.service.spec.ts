import { TestBed, inject } from '@angular/core/testing';
import { BrewerySearchService } from './brewery-search.service';

describe('BrewerySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrewerySearchService]
    });
  });


  
  fit('should be created', inject([BrewerySearchService], (service: BrewerySearchService) => {
    expect(service).toBeTruthy();
  }));


});
