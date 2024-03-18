import { Component, Input } from '@angular/core';
import { ITransazione } from '../../models/model.transazioni';

@Component({
  selector: 'app-transazioni',
  templateUrl: './transazioni.component.html',
  styleUrl: './transazioni.component.css'
})
export class TransazioniComponent {
  @Input() transazione:ITransazione;
}
