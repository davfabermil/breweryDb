import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { BrewerySearchFormComponent } from './brewery-search-form.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {Breweries} from '../../models/Breweries';
import { BrewerySearchService } from '../../brewery-search/brewery-search-service/brewery-search.service';
import {TableFilterPipe} from '../../shared/tableFiler';

describe('BrewerySearchFormComponent', () => {
  let component: BrewerySearchFormComponent;
  let fixture: ComponentFixture<BrewerySearchFormComponent>;
let service: BrewerySearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewerySearchFormComponent, TableFilterPipe ],
      providers: [FormBuilder, BrewerySearchService,TableFilterPipe],
      imports:[
        ReactiveFormsModule,
        FormsModule
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewerySearchFormComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BrewerySearchService);
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
