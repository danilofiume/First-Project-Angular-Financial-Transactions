import { Component, Input } from '@angular/core';
import { ITransazione } from '../../models/model.transazioni';

@Component({
  selector: 'app-lista-transazioni',
  templateUrl: './lista-transazioni.component.html',
  styleUrl: './lista-transazioni.component.css'
})
export class ListaTransazioniComponent {
  @Input() transazioni:ITransazione;
}
