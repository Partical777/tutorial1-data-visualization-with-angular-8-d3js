import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


//-------------------------Here--------------------------------
import { D3LineChartDirective } from './directive/line-chart.directive'
//-------------------------------------------------------------


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, D3LineChartDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
