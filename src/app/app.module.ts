import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundamentoTSComponent } from './fundamento-ts/fundamento-ts.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';

@NgModule({
  declarations: [
    AppComponent,
    FundamentoTSComponent,
    DirectivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
