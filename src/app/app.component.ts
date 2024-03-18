import { Component } from '@angular/core';
import { ITransazione } from './models/model.transazioni';
import { listaTransazioni } from './data/transazioni.list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stop-code';
  lista_transazioni:ITransazione[] = listaTransazioni
}
