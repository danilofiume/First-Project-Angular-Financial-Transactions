import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaTransazioniComponent } from './component/lista-transazioni/lista-transazioni.component';
import { TransazioniComponent } from './component/transazioni/transazioni.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTransazioniComponent,
    TransazioniComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
