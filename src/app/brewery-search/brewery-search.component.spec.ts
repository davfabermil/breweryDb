import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { BrewerySearchComponent } from './brewery-search.component';
import { BrewerySearchService } from './brewery-search-service/brewery-search.service';
import {BrewerySearchFormComponent} from '../brewery-search/brewery-search-form/brewery-search-form.component';
import {TableFilterPipe} from '../shared/tableFiler';

describe('BrewerySearchComponent', () => {
  let component: BrewerySearchComponent;
  let fixture: ComponentFixture<BrewerySearchComponent>;
  let service: BrewerySearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [ BrewerySearchComponent,
         BrewerySearchFormComponent,
        TableFilterPipe],
         
      providers: [BrewerySearchService, FormBuilder, TableFilterPipe]
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewerySearchComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BrewerySearchService);
    
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
