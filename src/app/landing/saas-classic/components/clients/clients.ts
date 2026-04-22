import { Component } from '@angular/core';
import { clientData } from '../../data';

@Component({
  selector: 'app-clients',
  imports: [],
  templateUrl: './clients.html',
  styles: ``,
})
export class Clients {
  clientData = clientData;
}
