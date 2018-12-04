import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrewerySearchFormComponent } from './brewery-search/brewery-search-form/brewery-search-form.component';
import {BrewerySearchComponent}  from './brewery-search/brewery-search.component';
import {TableFilterPipe} from './shared/tableFiler';

@NgModule({
  declarations: [
    AppComponent,
    BrewerySearchComponent,
    BrewerySearchFormComponent,
    TableFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
